function validateEmail(email) { 
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  }

  $(document).ready(function() {
    $("#contact").submit(function() { return false; });
    $("#send").on("click", function(){
      var emailval  = $("#email").val();
      var namevl  = $("#name").val();
      var phonevl  = $("#phone").val();
      var msgval    = $("#msg").val();
      var msglen    = msgval.length;
      var mailvalid = validateEmail(emailval);

      if(mailvalid == false) {
        $("#email").addClass("error");
      }
      else if(mailvalid == true){
        $("#email").removeClass("error");
      }
  if(mailvalid == false) {
        $("#name").addClass("error");
      }
      else if(mailvalid == true){
        $("#name").removeClass("error");
      }
      if(mailvalid == false) {
        $("#phone").addClass("error");
      }
      else if(mailvalid == true){
        $("#phone").removeClass("error");
      }
      if(msglen < 4) {
        $("#msg").addClass("error");
      }
      else if(msglen >= 4){
        $("#msg").removeClass("error");
      }
      
      if(mailvalid == true && msglen >= 4) {
        // если обе проверки пройдены
        // сначала мы скрываем кнопку отправки
        $("#send").replaceWith("<em>отправка...</em>");
        $.ajax({
          type: 'POST',
          url: 'sendmessage.php',
          data: $("#contact").serialize(),
          success: function(data) {
            if(data == "true") {
              $("#contact").fadeOut("fast", function(){
                $(this).before("<p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
                setTimeout("$.fancybox.close()", 1000);
              });
            }
          }
        });
      }
    });
  });
jQuery(function($){
   $("#phone").mask("+7 (999) 999-9999");
   $("#phone2").mask("+7 (999) 999-9999");
});