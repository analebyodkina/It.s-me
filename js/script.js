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


// carousel reflections section
$('.owl-carousel').owlCarousel({    
    lazyLoad:true,
    loop:true,
    margin:24,
    autoHeight: true,
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
      768 : {
        items:3,        
      }
    }
});

// copyright
var currentYear = new Date().getFullYear();
document.getElementById("footer-year").innerHTML = currentYear;

// // modal window -1
// const modalWindow = document.getElementById('modal')

// function modal(){ 
//     modalWindow.classList.add('active');
//     document.getElementById("html").classList.add("overflow-hidden");
//     document.getElementById("body").classList.add("overflow-hidden");    
// }
// // modal to close by click on black field
// modalWindow.addEventListener('click', function(){
//     modalWindow.classList.remove('active');
//     document.getElementById("html").classList.remove("overflow-hidden");
//     document.getElementById("body").classList.remove("overflow-hidden");
// });
// const closeModal = document.getElementById('closeModal');
// closeModal.addEventListener('click', () => {
//     modalWindow.classList.remove('active');
//     document.getElementById("html").classList.remove("overflow-hidden");
//     document.getElementById("body").classList.remove("overflow-hidden");
// });

// modalWindow.querySelector('.modal__body').addEventListener('click', function(event){  
//   event.stopPropagation();
// })

// modalWindow.querySelector('.modal__body').addEventListener('click', function(event){  
//   event.stopPropagation();
// })


// modal gallery of photos
$('.main-gallery').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });


// // modal window -2
// const modalWindow2 = document.getElementById('modal2')

// function modal2(){ 
//     modalWindow2.classList.add('active');
//     document.getElementById("html").classList.add("overflow-hidden");
//     document.getElementById("body").classList.add("overflow-hidden");    
// }
// // modal to close by click on black field
// modalWindow2.addEventListener('click', function(){
//     modalWindow2.classList.remove('active');
//     document.getElementById("html").classList.remove("overflow-hidden");
//     document.getElementById("body").classList.remove("overflow-hidden");
// });
// const closeModal2 = document.getElementById('closeModal2');
// closeModal2.addEventListener('click', () => {
//     modalWindow2.classList.remove('active');
//     document.getElementById("html").classList.remove("overflow-hidden");
//     document.getElementById("body").classList.remove("overflow-hidden");
// });

// modalWindow2.querySelector('.modal__body').addEventListener('click', function(event){  
//   event.stopPropagation();
// })

// modalWindow2.querySelector('.modal__body').addEventListener('click', function(event){  
//   event.stopPropagation();
// })


// // modal window -3
// const modalWindow3 = document.getElementById('modal3')

// function modal3(){ 
//     modalWindow3.classList.add('active');
//     document.getElementById("html").classList.add("overflow-hidden");
//     document.getElementById("body").classList.add("overflow-hidden");    
// }
// // modal to close by click on black field
//     modalWindow3.addEventListener('click', function(){
//     modalWindow3.classList.remove('active');
//     document.getElementById("html").classList.remove("overflow-hidden");
//     document.getElementById("body").classList.remove("overflow-hidden");
// });
// const closeModal3 = document.getElementById('closeModal3');
//     closeModal3.addEventListener('click', () => {
//     modalWindow3.classList.remove('active');
//     document.getElementById("html").classList.remove("overflow-hidden");
//     document.getElementById("body").classList.remove("overflow-hidden");
// });

// modalWindow3.querySelector('.modal__body').addEventListener('click', function(event){  
//   event.stopPropagation();
// })

// modalWindow3.querySelector('.modal__body').addEventListener('click', function(event){  
//   event.stopPropagation();
// })







