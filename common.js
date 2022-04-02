
     document.querySelector(".cart").addEventListener("click",cartFunction)
     function cartFunction(){
         window.location.href="cart.html"
     }
      document.querySelector(".profile").addEventListener("click",loginFunction)
      function loginFunction(){
          
          window.location.href="login.html"
      }
      window.onscroll = function() {myFunction()};
    
      var navbar = document.querySelector(".header2");
      var sticky = navbar.offsetTop;
      
      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      }