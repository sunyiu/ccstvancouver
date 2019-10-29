$(() => {
  $("#sendFeedbackBtn").click(() => {

    const name = $('#sendFeedbackName')[0].value;
    const from = $('#sendFeedbackEmail')[0].value;
    const message = $('#sendFeedbackText')[0].value;

    debugger;

    $.post("./feedback?", {
      from: from,
      name: name,
      message: message
    }).done(function(data) {
      console.log(data);
    });
  });
});
