function Autosize(Alpine) {
    Alpine.directive('autosize', () => {
        $el.style.height = '4px';
        $el.style.height = `${$el.scrollHeight}px`;
    });
}

export default Autosize;
