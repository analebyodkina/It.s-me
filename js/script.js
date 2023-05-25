// nav toogle
function navToggle() {
    var headerUl = document.getElementById("headerUl");
    headerUl.classList.toggle("active");
}


// accordion
const accordionItems = document.querySelectorAll('.accordion__item')
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.accordion__header')
    
    accordionHeader.addEventListener('click', () =>{        
        const openItem = document.querySelector('.accordion-open')    
        
        toggleItem(item)        
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})
const toggleItem = (item) =>{    
    const accordionContent = item.querySelector('.accordion__content')
    
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{        
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}


// carousel
$('.owl-carousel').owlCarousel({    
    lazyLoad:true,
    loop:true,
    margin:24,
    nav: true,      
    responsive : {
      // breakpoint from 0 up
      0 : {
          items:1.3,
          
      },      
      576 : {
          items:2, 
                
      },
      // breakpoint from 992 up      
      992 : {
        items:3,
        
      }

    }
});

// copyright
var currentYear = new Date().getFullYear();
document.getElementById("footer-year").innerHTML = currentYear;

// modal window


// функция, которую мы вызывем в html по клику
// н вешаем метод адлистенер. он будет отслеживать нажатие по клику
// и выполнять функцию е.
// е нужно, т.к сама кнока (ссылка), при нажтии куда-то ведет. ф-я, чтобы это убрать
const modalWindow = document.getElementById('modal')

function modal(){ 
    modalWindow.classList.add('active');
    document.getElementById("html").classList.add("overflow-hidden");
    document.getElementById("body").classList.add("overflow-hidden");
    //   return false;
}

// чтобы закрывалось окно при нажатии на черное
modalWindow.addEventListener('click', function(){
    modalWindow.classList.remove('active');
    document.getElementById("html").classList.remove("overflow-hidden");
    document.getElementById("body").classList.remove("overflow-hidden");
});
const closeModal = document.getElementById('closeModal');
closeModal.addEventListener('click', () => {
    modalWindow.classList.remove('active');
    document.getElementById("html").classList.remove("overflow-hidden");
    document.getElementById("body").classList.remove("overflow-hidden");
});

modalWindow.querySelector('.modal__body').addEventListener('click', function(event){  
  event.stopPropagation();
})
// делаем то же самое для кнопочки закрытия попапа. сначала нахродим ее,
// отслеживаем нажатие и при нажатии убираем класс эктив

modalWindow.querySelector('.modal__body').addEventListener('click', function(event){  
  event.stopPropagation();
})

//  1. Здесь мы обратились к попапу и внутри него по классу нашли белое окно.
//  2. отслеживаем клик по нему. в функции евент - это событие мыши. клик.
//  3. сделали так чтобы это событие было только по белому окну, и информация о нем не передавалась родителю белого окна.
//  т.е. чтоб при клике на белое, программа не воспринимала это как клик на черное. 
//  есть такая странная осообенность js - передача события родителю

