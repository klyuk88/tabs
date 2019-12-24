window.addEventListener('DOMContentLoaded',function () { 
    'use strict';
    
function tab( tabsParent, tabs, tabsContent ) { 


    let tab = document.querySelectorAll(tabsParent),
        info = document.querySelector(tabs),
        tabContent = document.querySelectorAll(tabsContent);

// функция которая скрывает все табы кроме 1го
function hideTabContent(a) { 
    for (let index = a; index < tabContent.length; index++) {
        tabContent[index].classList.remove('show');
        tabContent[index].classList.add('hide');   
    }
 }

 hideTabContent(1);


 // функция которая показывает таб с индексом вместо b
 function showTabContent(b) { 
   if (tabContent[b].classList.contains('hide')) {
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
   }

  }
//   при клике на таб запускаем цикл по всем табам и сверяем каждый таб с тем табом на который кликнули если они равны то скрываем все табы а таб который равен по тому на который кликнули показываем
  info.addEventListener('click', function (event) {
      let target = event.target;
      if (target && target.classList.contains(tabs)) {
          for (let index = 0; index < tab.length; index++) {
              if (target == tab[index]) {
                hideTabContent(0);
                showTabContent(index);
                break;
              }
              
          }
      }
  });


 }
   
    

 });