$(function(){
    $.validator.addMethod("letters", function(value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
      });

    $("#registerForm").validate({
        rules: {
            engLastName: {
              required: true,
              minlength: 3,
              letters: true
            },
            email: {
              required: true,
              email: true
            }
          },
          messages: {
            engLastName: "Please specify your name (only letters and spaces are allowed)",
            email: "Please specify a valid email address"
          },
        submitHandler: function(form) {
        //   form.submit();
        }
       });


})