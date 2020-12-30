$(() => {
  const name$ = $('#sendFeedbackName')[0];
  const from$ = $('#sendFeedbackEmail')[0];
  const message$ = $('#sendFeedbackText')[0];
  const nameError$ = $('#name.error_msg')[0];
  const fromError$ = $('#email.error_msg')[0];
  const messageError$ = $('#message.error_msg')[0];
  const messageSend$ = $('#messageSend.error_msg')[0];

  const isBlank = function(str) { 
    return (!str || /^\s*$/.test(str)); 
  };

  const validateEmail = function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

  $("#sendFeedbackBtn").click(() => {
    const name = name$.value;
    const from = from$.value;
    const message = message$.value;
    let hasError = false;
    if (isBlank(name)){
      hasError = true;
      nameError$.classList.add('show');
    }
    if (isBlank(from) || !validateEmail(from)){
      hasError = true;
      fromError$.classList.add('show');
    }
    if (isBlank(message)){
      hasError = true;
      messageError$.classList.add('show');
    }

    if (!hasError){
      $.post("/feedback?", {
        from: from,
        name: name,
        message: message
      }).done(function(data) {
        name$.value = '';
        from$.value = '';
        message$.value = '';
        nameError$.classList.remove('show');
        fromError$.classList.remove('show');
        messageError$.classList.remove('show');
        messageSend$.classList.add('show');
        setTimeout(() => {
          messageSend$.classList.remove('show');
        }, (3000));

        //console.log(data);
      });
    }
  });
});
