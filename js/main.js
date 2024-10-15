$('.scrollto a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});


const popup = document.querySelector("#popup");
const body = document.body;
const element = document.querySelectorAll('.bar');
const hamb = document.querySelector("#hamb"); 
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  for (let i = 0; i < element.length; i++) {
    if(element[i].classList.contains('black')){
        element[i].classList.remove('black');
    }else {
        element[i].classList.add('black');
    }
  }
  
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  
  body.classList.toggle("noscroll");
  renderPopup();
}