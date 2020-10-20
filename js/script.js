
//Tabs
let tabs = document.querySelectorAll("._tabs");
let bodyLock = document.querySelector("body");
for (let index = 0; index < tabs.length; index++) {
   let tab = tabs[index];
   let tabs_items = tab.querySelectorAll("._tabs-item");
   let tabs_blocks = tab.querySelectorAll("._tabs-block");
   for (let index = 0; index < tabs_items.length; index++) {
      let tabs_item = tabs_items[index];
      tabs_item.addEventListener("click", function (e) {
         for (let index = 0; index < tabs_items.length; index++) {
            let tabs_item = tabs_items[index];
            tabs_item.classList.remove('_active');
            tabs_blocks[index].classList.remove('_active');

         }
         tabs_item.classList.add('_active');
         tabs_blocks[index].classList.add('_active');
         bodyLock.classList.add('lock');
         e.preventDefault();
      });
   }
}
//=================

// Клики в форме

let changePass = document.querySelector('.general._change');
let newPassSection = document.querySelector('.new-password');
let changeForgot = document.querySelector('.forgot._change');
let forgotPassSection = document.querySelector('.forgot-pass');

if (changePass) {
   changePass.addEventListener('click', function () {
      newPassSection.classList.add('_active');
   })
}
if (changeForgot) {
   changeForgot.addEventListener('click', function () {
      forgotPassSection.classList.add('_active');
   })
}

//=================