const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });



// burgerbar
let navigationBlock = document.getElementById ("navtagwrapper");
let burgerbarBlock = document.getElementById ("BurgerBar");

burgerbarBlock.addEventListener ("click", function() {
   navigationBlock.classList.toggle ("navActive");
});

