

  const loginPopup = document.querySelector(".login-popup");
  const close = document.querySelector(".close");


  window.addEventListener("load",function(){

   showPopup();
   // setTimeout(function(){
   //   loginPopup.classList.add("show");
   // },5000)

  })

  function showPopup(){
        const timeLimit = 2 // seconds;
        let i=0;
        const timer = setInterval(function(){
         i++;
         if(i == timeLimit){
          clearInterval(timer);
          loginPopup.classList.add("show");
         }
         console.log(i)
        },1000);
  }


  close.addEventListener("click",function(){
    loginPopup.classList.remove("show");
  })

  var a = 0;

  function mouseOver(){


      const email = document.forms['suForm']['email'].value;
      const pass = document.forms['suForm']['pass'].value;
      const tick = document.querySelector('#check');

      const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if((!email.match(emailCheck) || pass == "" || tick.checked == false) && a==0){
      buttonMoveRight();
      a = 1;
      return false;
      }

      if((!email.match(emailCheck) || pass == "" || tick.checked == false) && a==1){
      buttonMoveLeft();
      a = 2;
      return false;
      }


      if((!email.match(emailCheck) || pass == "" || tick.checked == false) && a==2){
      buttonMoveRight();
      a = 1;
      return false;
      }

      else{

          // document.getElementById('submit-btn').click();
          document.getElementById('submit-btn').style.cursor = 'pointer';
          return false;
      };

  };




  function buttonMoveLeft(){

      const button = document.getElementById('submit-btn');
      button.style.transform = 'translateX(0%)';

  };


  function buttonMoveRight(){

      const button = document.getElementById('submit-btn');
      button.style.transform = 'translateX(110%)';

  };


  function resetBtn(){
      const button = document.getElementById('submit-btn');
      button.style.transform = 'translateX(0%)';
  };
