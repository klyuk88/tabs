window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    function tab(tabsParent, tabs, tabsContent) {


        let tab = document.querySelectorAll(tabsParent),
            info = document.querySelector(tabs),
            tabContent = document.querySelectorAll(tabsContent);

        // function that hides all tabs except 1st
        function hideTabContent(a) {
            for (let index = a; index < tabContent.length; index++) {
                tabContent[index].classList.remove('show');
                tabContent[index].classList.add('hide');
            }
        }

        hideTabContent(1);


        // function that shows a tab with an index instead of b
        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }

        }
        //when you click on a tab, start a cycle for all tabs and check each tab with the tab that you clicked on if they are equal then hide all tabs and the tab that is equal to the one you clicked on show
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