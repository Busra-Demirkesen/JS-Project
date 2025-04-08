const navbarMenu = document.querySelector('.navbar .links');

const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

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
loginBtn.addEventListener('click', showLoginPopup);

function showLoginPopup(){
    document.body.classList.toggle('show-popup');
}

signupBtn.addEventListener('click', () => {
    document.body.classList.add('show-popup');
    formPopup.classList.add('show-signup'); // signup formu göster
});

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






// Kitapları çekmek için fonksiyon
// API'den rastgele kitapları çek
// Kitapları çekmek için fonksiyon
fetch('https://www.googleapis.com/books/v1/volumes?q=random&maxResults=10&key=AIzaSyAsI9oefJYuV8SlCyecBCBAT67nwz4qcFE')
  .then(response => response.json())
  .then(data => {
    const booksContainer = document.querySelector('.books-container');
    
    // Kitapları dönerek sadece görselleri ekle
    data.items.forEach(book => { // books yerine items kullanıyoruz
      const bookItem = document.createElement('div');
      bookItem.classList.add('book-item');
      
      // Kitap görseli var mı kontrol et
      if (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) {
        const bookImage = document.createElement('img');
        bookImage.src = book.volumeInfo.imageLinks.thumbnail;  // Görseli ekle
        bookImage.alt = book.volumeInfo.title;  // Kitap başlığını alt text olarak ekle
        bookImage.classList.add('book-image');

        bookItem.appendChild(bookImage);
        
        // Görseli container'a ekle
        booksContainer.appendChild(bookItem);
      }
    });
  })
  .catch(error => {
    console.error('Error fetching books:', error);
  });


  