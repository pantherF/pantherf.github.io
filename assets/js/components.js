document.addEventListener('DOMContentLoaded', async function() {
    const components = {
        'header': document.querySelector('#header'),
        'navbar': document.querySelector('#navbar'),
        'footer': document.querySelector('#footer')
    };

    for (const [name, element] of Object.entries(components)) {
        if (element) {
            const response = await fetch(`/components/${name}.html`);
            const html = await response.text();
            element.innerHTML = html;
        }
    }
});