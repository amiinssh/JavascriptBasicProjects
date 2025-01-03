const range = document.getElementById("range");

range.addEventListener('input', e => {
    const value = Number(e.target.value);
    const label = e.target.nextElementSibling;
    
    const range_width = getComputedStyle(e.target).getPropertyValue("width");
    const label_width = getComputedStyle(label).getPropertyValue('width');

    const num_width = parseFloat(range_width);
    const num_label_width = parseFloat(label_width);
    
    const max = +e.target.max;
    const min = +e.target.min;

    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);
    
    label.style.left = `${left}px`;
    label.innerHTML = value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
