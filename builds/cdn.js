import autosize from '../src/index.js';

document.addEventListener('alpine:init', () => {
    autosize(window.Alpine);
});
