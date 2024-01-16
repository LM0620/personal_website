function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  /*  open 类通常在CSS中定义，用于控制元素的显示和隐藏（通过改变 display、opacity, transform ）*/
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}