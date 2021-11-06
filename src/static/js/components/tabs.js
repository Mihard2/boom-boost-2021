// const loginForm = document.getElementById('loginPopUp');
const tabSwitch = document.querySelectorAll('.tab__switch');
const tabElement = document.querySelectorAll('.tab__element');

tabSwitch.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = elem.closest('.tab');
        const thisSwitch = parent.querySelectorAll('.tab__switch');
        const thisElement = parent.querySelectorAll('.tab__element');
        const dataSwitch = elem.getAttribute('data');

        thisSwitch.forEach(switsh => {
            switsh.classList.remove('tab__switch-active');
            elem.classList.add('tab__switch-active');
        });

        thisElement.forEach(element => {
            if (element.getAttribute('data') != dataSwitch) {
                element.classList.remove('tab__element-active');
            } else {
                element.classList.add('tab__element-active');
            }
        })
    })
})