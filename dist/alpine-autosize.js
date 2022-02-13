(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    function Autosize(Alpine) {
      Alpine.directive('autosize', () => {
        $el.style.height = '4px';
        $el.style.height = `${$el.scrollHeight}px`;
      });
    }

    document.addEventListener('alpine:init', () => {
      Autosize(window.Alpine);
    });

}));
//# sourceMappingURL=alpine-autosize.js.map
