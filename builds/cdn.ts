import autosize from '../src/index';

document.addEventListener('alpine:init', (): void => {
    autosize((<any>window).Alpine);
});
