

let mainElement=document.querySelector("main");

let ratesCounter=0;



 let rateElements= document.querySelectorAll(".clicked");
    rateElements.forEach(function(rate){

      rate.addEventListener("click",function(e){

          if(e.target){

            if(ratesCounter!=0){

          rateElements.forEach(function(element){

          if(element.textContent==ratesCounter){
            
            element.classList.remove("selected");

          }  

          })

        }
        
        this.classList.add("selected");
        ratesCounter=Number(this.textContent);
      }
      

      })

  } )








const inputElement=document.querySelector("input");

 inputElement.addEventListener('click', function(){


  if(ratesCounter!=0){

  const thankYouCard=` <div class="second-card">

  <img src="./images/illustration-thank-you.svg" alt="illustration thank you">

    <div>You selected <span>${ratesCounter}</span> out of 5</div>

    <h1>Thank you!</h1>

    <p> We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!</p>
</div>

`;


     mainElement.innerHTML=thankYouCard;
  }else{


    window.alert("Please rate befor submit !");

  }


});
     





