const navItems = document.querySelectorAll(".nav-links li ");

// hamburger.addEventListener('click',()=>{
//     console.log(navItems)
//     navLinks.classList.toggle('open')

// })
console.log(navItems)
const slideNav = () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
 
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        navItems.forEach((link,index)=>{
   
            link.style.animation=`fade .5s ease 1s forwards`;
            // `fade .5s ease forwards ${index/7+.5}s`;
            
        })
    });
};

slideNav();
// تابع باید فراخوانی شود

