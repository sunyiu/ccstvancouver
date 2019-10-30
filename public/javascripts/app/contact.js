$(() => {
  const name$ = $('#sendFeedbackName')[0];
  const from$ = $('#sendFeedbackEmail')[0];
  const message$ = $('#sendFeedbackText')[0];

  $("#sendFeedbackBtn").click(() => {
    const name = name$.value;
    const from = from$.value;
    const message = message$.value;

    

    $.post("./feedback?", {
      from: from,
      name: name,
      message: message
    }).done(function(data) {
      name$.value = '';
      from$.value = '';
      message$ = '';
      //console.log(data);
    });
  });
});
