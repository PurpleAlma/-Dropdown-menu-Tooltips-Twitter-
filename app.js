let menu_items=document.querySelectorAll('.main__menu__item')
let submenu=document.querySelector('.main-submenu')

menu_items.forEach(menu=>{
    menu.addEventListener('mouseenter',showSubmenu)
})

submenu.addEventListener('mouseleave',hideSubmenu)

function showSubmenu(){
    const submenu=document.querySelector('.main-submenu')
    submenu.style.display = "flex";
}
function hideSubmenu() {
    const submenu=document.querySelector('.main-submenu')
    submenu.style.display = "none";
  }



let dropdown1= document.querySelector('.main2__menu__item__dropdown1')
let menu2_item_one=document.querySelector('.main2-menu-item--1')

