document.querySelector("#product").addEventListener("change", productPage)
    var productList = document.querySelector("#product")
  
     function productPage(){
        var product =document.querySelector("#product").value
       
        

        if(product=="vegan"){
            window.location.href="vsweets.html"
            productList.style.color="yellowgreen";
        }
       else if(product=="prdcts"){
            console.log(1)
            window.location.href="products.html"
            productList.style.color="yellowgreen";
        }
       else if(product=="saus"){
            window.location.href="sauces.html"
            productList.style.color="yellowgreen";
        }
        else if(product=="butter"){
            window.location.href="butters.html"
            productList.style.color="yellowgreen";
        }
        else if(product=="bakes"){
            window.location.href="bakes.html"
            productList.style.color="yellowgreen";
        }
     }
     