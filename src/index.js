import autosize from "autosize";

function Autosize(Alpine) {
    Alpine.directive("autosize", (el, {modifiers}, {cleanup}) => {
        autosize(el);
        const attributes = Array.from(el.attributes);

        let hasWireModel = false;

        for (let {nodeName} of attributes) {
            if (nodeName === "wire:model" || nodeName.startsWith("wire:model.")) {
                hasWireModel = true;
                break;
            }
        }

        if (!el.hasAttribute("wire:ignore") && hasWireModel) {
            el.setAttribute("wire:ignore", "");
        }

        const update = () => {
            autosize.update(el);
        };

        el.addEventListener("autosize", update);

        cleanup(() => {
            autosize.destroy(el);
            el.removeEventListener("autosize", update);
        });
    });

    Alpine.magic("autosize", (node) => (el) => {
        const element = el || node;
        element.dispatchEvent(new Event("autosize"));
    });
}

export default Autosize;
