const toggleMenu = document.getElementsByClassName('toggle')[0]
const menuUl = document.getElementsByClassName('menubarul')[0]

toggleMenu.addEventListener('click', () => {
   if (menuUl.style.display ==='flex'){
       menuUl.style.display='none'       
   }
   else{
    menuUl.style.display='flex' 
   }
})