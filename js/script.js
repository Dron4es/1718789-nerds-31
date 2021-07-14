let modalOpenBtn = document.querySelector('.modal-feedback-btn');
let popup = document.querySelector('.popup');
let modalCloseBtn = document.querySelector('.close-btn');
modalOpenBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  popup.classList.remove('popup-hide');
})

modalCloseBtn.addEventListener('click', function(){
  popup.classList.add('popup-hide');
})


