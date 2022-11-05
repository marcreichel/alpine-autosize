(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    function Autosize(Alpine) {
        Alpine.directive('autosize', function (el, _a, _b) {
            var modifiers = _a.modifiers;
            var cleanup = _b.cleanup;
            var attributes = Array.from(el.attributes);
            var hasWireModel = false;
            for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
                var nodeName = attributes_1[_i].nodeName;
                if (nodeName === 'wire:model' ||
                    nodeName.startsWith('wire:model.')) {
                    hasWireModel = true;
                    break;
                }
            }
            if (!el.hasAttribute('wire:ignore') && hasWireModel) {
                el.setAttribute('wire:ignore', '');
            }
            var previousResizeValue = el.style.resize;
            el.style.resize = 'none';
            var previousMinHeight = el.style.minHeight;
            el.style.minHeight = "".concat(el.getBoundingClientRect().height, "px");
            var paddingModifier = modifiers.filter(function (modifier) { return modifier.match(/px$/i); })[0] ||
                false;
            var padding = 0;
            if (paddingModifier !== false) {
                padding = parseInt(paddingModifier);
            }
            var handler = function (event) {
                var element = event.target;
                if (!element.scrollHeight) {
                    return;
                }
                element.style.height = '4px';
                element.style.height = "".concat(element.scrollHeight + padding, "px");
            };
            handler({ target: el });
            el.addEventListener('input', handler);
            cleanup(function () {
                el.style.resize = previousResizeValue;
                el.style.minHeight = previousMinHeight;
                el.removeEventListener('input', handler);
            });
        });
    }

    document.addEventListener('alpine:init', function () {
        Autosize(window.Alpine);
    });

}));
//# sourceMappingURL=alpine-autosize.js.map
