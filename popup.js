const navbarMenu = document.querySelector('.navbar .links');

const showPopupButton = document.getElementById('login-btn');

const hidePopupButton = document.getElementById('close-btn');

const menuBtn = document.querySelector('.menu-btn');

const hideMenuBtn = navbarMenu.querySelector('.close-btn');

const formPopup = document.getElementById('form-popup');

const loginSignGroupLink = document.querySelectorAll('.form-box .bottom-link a');



//Show the menu when the button is clicked
menuBtn.addEventListener('click', () =>{
navbarMenu.classList.toggle('show-menu');
});

//Hide the menu when the button is clicked
hideMenuBtn.addEventListener('click', () => menuBtn.click());



//Show the login popup when the button is clicked
showPopupButton.addEventListener('click', showLoginPopup);

function showLoginPopup(){
    document.body.classList.toggle('show-popup');
}

//Hide the login popup when the button is clicked
hidePopupButton.addEventListener('click', hidePopup);

function hidePopup(){
    document.body.classList.remove('show-popup');
}

loginSignGroupLink.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (link.id === 'signup-link') {
            formPopup.classList.add('show-signup');
        } else {
            formPopup.classList.remove('show-signup');
        }
    });
});
