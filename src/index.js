function Autosize(Alpine) {
    Alpine.directive('autosize', (el, { modifiers }, { cleanup }) => {
        const attributes = Array.from(el.attributes);

        let hasWireModel = false;

        for (let { nodeName } of attributes) {
            if (nodeName === 'wire:model' || nodeName.startsWith('wire:model.')) {
                hasWireModel = true;
                break;
            }
        }

        if (!el.hasAttribute('wire:ignore') && hasWireModel) {
            el.setAttribute('wire:ignore', '');
        }

        const previousResizeValue = el.style.resize;
        el.style.resize = 'none';

        const previousMinHeight = el.style.minHeight;
        el.style.minHeight = `${el.getBoundingClientRect().height}px`;

        const paddingModifier = modifiers.filter(modifier => modifier.match(/px$/i))[0] || false;
        let padding = 0;
        if (paddingModifier !== false) {
            padding = parseInt(paddingModifier);
        }

        const handler = (event) => {
            const element = event.target;
            if (!element.scrollHeight) {
                return;
            }
            element.style.height = '4px';
            element.style.height = `${element.scrollHeight + padding}px`;
        };

        handler({ target: el });

        el.addEventListener('input', handler);

        cleanup(() => {
            el.style.resize = previousResizeValue;
            el.style.minHeight = previousMinHeight;
            el.removeEventListener('input', handler);
        });
    });
}

export default Autosize;
