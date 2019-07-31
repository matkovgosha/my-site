window.onload = function(){
    
    var btnShow = document.querySelector('.show-alert');
    var btnHide = document.querySelector('.hide-alert');
    var divAlert = document.querySelector('.animMail');
    var Main = document.querySelector('.animMain');
    
 
    
    
    

    btnShow.addEventListener('click', function(){         
          Main.style.display = 'none';
          var handler = function(){
            divAlert.classList.remove('fa-enter-active');
            divAlert.removeEventListener('animationend', handler);
            
        };
        
      divAlert.style.display = 'block';
      divAlert.classList.add('fa-enter');
      
      raf(function(){
          divAlert.classList.add('fa-enter-active');
          divAlert.classList.remove('fa-enter');
          });
      divAlert.addEventListener('animationend', handler);      
       
});      
 
    btnHide.addEventListener('click', function(){               
         divAlert.style.display = 'none';
          var handler2 = function(){
            Main.classList.remove('fa-enter-active');
            Main.removeEventListener('animationend', handler2);
        };
        
      Main.style.display = 'block';
      Main.classList.add('fa-enter');
      
      raf(function(){
          Main.classList.add('fa-enter-active');
          Main.classList.remove('fa-enter');
          });
      Main.addEventListener('animationend', handler2);      

});
}
function raf(fn){
   
    window.requestAnimationFrame(function(){
        window.requestAnimationFrame(function(){
            fn();
        });
    });
}
