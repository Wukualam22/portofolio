const toggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('ul');

let isopen = true;
toggle.addEventListener('click', () => {
    if (isopen) {
        nav.animate([
            {
                top: '0',
                opacity: '0'
            },
            {
                top: '59px',
                opacity: '1'
            },
        ], {
            duration: 300,
            fill: 'forwards'
        });
        // display: 'block';
        nav.style.display = 'block';
    } else {
        nav.animate([
            {
                top: '59px',
                opacity: 1
            },
            {
                top: '0',
                opacity: 0
            },
        ], {
            duration: 300,
            fill: 'forwards'
        });
        // display: 'none';
        setTimeout(() => {
            nav.style.display = 'none';
        }, 300);
    }
    isopen = !isopen;
});