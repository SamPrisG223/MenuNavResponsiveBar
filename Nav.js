const toggleMenu = document.getElementsByClassName('toggle')[0]
const menuUl = document.getElementsByClassName('menubarul')[0]
const menu = document.getElementsByClassName('body')

toggleMenu.addEventListener('click', () => {
   if (menuUl.style.display ==='flex'){
       menuUl.style.display='none'   
           
   }
   else{
    menuUl.style.display='flex' 
   }
})