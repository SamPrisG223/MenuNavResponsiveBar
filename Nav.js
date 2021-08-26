const toggleMenu = document.getElementsByClassName('toggle')[0]
const menuUl = document.getElementsByClassName('menubarul')[0]

toggleMenu.addEventListener('click', () => {
   if (menuUl.style.display ==='none'){
       menuUl.style.display='flex'       
   }
   else{
    menuUl.style.display='none' 
   }
})