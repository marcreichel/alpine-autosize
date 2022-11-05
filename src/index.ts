import { Alpine } from 'alpinejs';

function Autosize(Alpine: Alpine): void {
    Alpine.directive(
        'autosize',
        (
            el: HTMLElement,
            { modifiers }: { modifiers: string[] },
            { cleanup }: { cleanup: (callback: () => void) => void },
        ): void => {
            const attributes: Attr[] = Array.from(el.attributes);

            let hasWireModel: boolean = false;

            for (let { nodeName } of attributes) {
                if (
                    nodeName === 'wire:model' ||
                    nodeName.startsWith('wire:model.')
                ) {
                    hasWireModel = true;
                    break;
                }
            }

            if (!el.hasAttribute('wire:ignore') && hasWireModel) {
                el.setAttribute('wire:ignore', '');
            }

            const previousResizeValue: string = el.style.resize;
            el.style.resize = 'none';

            const previousMinHeight: string = el.style.minHeight;
            el.style.minHeight = `${el.getBoundingClientRect().height}px`;

            const paddingModifier =
                modifiers.filter((modifier) => modifier.match(/px$/i))[0] ||
                false;
            let padding: number = 0;
            if (paddingModifier !== false) {
                padding = parseInt(paddingModifier);
            }

            const handler: (event: Partial<Event>) => void = (
                event: Partial<Event>,
            ) => {
                const element: HTMLElement = <HTMLElement>event.target;
                if (!element.scrollHeight) {
                    return;
                }
                element.style.height = '4px';
                element.style.height = `${element.scrollHeight + padding}px`;
            };

            handler({ target: el });

            el.addEventListener('input', handler);

            cleanup((): void => {
                el.style.resize = previousResizeValue;
                el.style.minHeight = previousMinHeight;
                el.removeEventListener('input', handler);
            });
        },
    );
}

export default Autosize;
