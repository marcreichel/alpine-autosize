function Autosize(Alpine) {
    Alpine.directive('autosize', (el, {}, { cleanup }) => {
        const previousResizeValue = el.style.resize;
        el.style.resize = 'none';

        const handler = (event) => {
            const element = event.target;
            element.style.height = '4px';
            element.style.height = `${element.scrollHeight}px`;
        };

        handler({ target: el });

        el.addEventListener('input', handler);

        cleanup(() => {
            el.style.resize = previousResizeValue;
            el.removeEventListener('input', handler);
        });
    });
}

export default Autosize;
