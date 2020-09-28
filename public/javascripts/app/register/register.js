$(function () {

  var portrait$ = $('#portrait'),
      portraitEncoded$ = $('#portraitEncoded'),
      portraitName$ = $('#portraitName'),
      portraitType$ = $('#portraitType'),
      portraitPreview$ = $('#portraitPreview'),
      portraitError$ = $('#portraitError');
  portrait$.change((e) => {
    console.log(e);

    const file = e.currentTarget.files[0];
    const fileType = e.currentTarget.files[0].type;
    const fileName = e.currentTarget.files[0].name;

    // imageValidation.empty();

    var filesize = ((file.size / 1024) / 1024).toFixed(4); // MB
    if (filesize > 1) {
        console.log('profile image cannot exceed 1MB');
        portraitPreview$.removeClass('show');
        portraitEncoded$.val('');
        portraitName$.val('');
        portraitError$.html('Portrait image cannot exceed 1MB');
        portrait$.val('');
        return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", function () {
        // convert image file to base64 string
        // portraitPreview$.attr('src', reader.result);
        portraitError$.html('');
        portraitPreview$.css({ 'background-image': 'url("' + reader.result + '")' });
        portraitPreview$.addClass('show');

        portraitName$.val(fileName);
        portraitEncoded$.val(reader.result.split(',')[1]);
        portraitType$.val(fileType);
        // profileRemoveBtn$.show();
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
  });

  var personalSalvation$ = $('#personalSalvation'),
      personalSalvationEncoded$ = $('#personalSalvationEncoded'),
      personalSalvationName$ = $('#personalSalvationName'),
      personalSalvationType$ = $('#personalSalvationType'),
      personalSalvationError$ = $('#personalSalvationError');
    personalSalvation$.change((e) => {
    // console.log(e);

      const file = e.currentTarget.files[0];
      const fileType = e.currentTarget.files[0].type;
      const fileName = e.currentTarget.files[0].name;

      var filesize = ((file.size / 1024) / 1024).toFixed(4); // MB
      if (filesize > 1) {
          console.log('personal salvation cannot exceed 1MB');
          personalSalvationEncoded$.val('');
          personalSalvationName$.val('');
          personalSalvationError$.html('Personal Salvation PDF cannot exceed 1MB');
          personalSalvation$.val('');
          return;
      }

      const reader = new FileReader();

      reader.addEventListener("load", function () {
          // convert image file to base64 string
          // portraitPreview$.attr('src', reader.result);
          personalSalvationError$.html('');
          personalSalvationName$.val(fileName);
          personalSalvationEncoded$.val(reader.result.split(',')[1]);
          personalSalvationType$.val(fileType);
          // profileRemoveBtn$.show();
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
  });

  var researchPaper$ = $('#researchPaper'),
      researchPaperEncoded$ = $('#researchPaperEncoded'),
      researchPaperName$ = $('#researchPaperName'),
      researchPaperType$ = $('#researchPaperType'),
      researchPaperError$ = $('#researchPaperError');
    researchPaper$.change((e) => {
    // console.log(e);

      const file = e.currentTarget.files[0];
      const fileType = e.currentTarget.files[0].type;
      const fileName = e.currentTarget.files[0].name;

      var filesize = ((file.size / 1024) / 1024).toFixed(4); // MB
      if (filesize > 1) {
          console.log('research paper cannot exceed 1MB');
          researchPaperEncoded$.val('');
          researchPaperName$.val('');
          researchPaperError$.html('Research Paper PDF cannot exceed 1MB');
          researchPaper$.val('');
          return;
      }

      const reader = new FileReader();

      reader.addEventListener("load", function () {
          // convert image file to base64 string
          // portraitPreview$.attr('src', reader.result);
          researchPaperError$.html('');
          researchPaperName$.val(fileName);
          researchPaperEncoded$.val(reader.result.split(',')[1]);
          researchPaperType$.val(fileType);
          // profileRemoveBtn$.show();
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
  });

  
  $.validator.addMethod("letters", function (value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
  });

  var submitBtn$ = $('#submitBtn');
  var submitWait$ = $('#submitWait');
  var form$ = $("#registerForm");

  submitWait$.hide();

  form$.validate({
    rules: {
      program: {
        required: true
      },
      portrait:{
        required: true
      },
      engLastName: {
        required: true,
        letters: true
      },
      engFirstName: {
        required: true,
        letters: true
      },
      preferredName: {
        required: true
      },
      chineseName: {
        required: true
      },
      homeAddress: {
        required: true
      },
      homeAptNum: {
        required: true
      },
      homeStreet: {
        required: true
      },
      homeCity: {
        required: true
      },
      homeCountry: {
        required: true
      },
      homePhone: {
        required: true,
        digits: true
      },
      mobile: {
        digits: true
      },
      email: {
        required: true,
        email: true
      },
      birthday: {
        required: true,
        date: true
      },
      birthCountry: {
        required: true
      },
      gender: {
        required: true
      },
      martialStatus: {
        required: true
      },
      immigrationStatus: {
        required: true
      },
      socialInsuranceNum: {
        digits: true
      },
      healthCardNum: {
        digits: true
      },
      medicalCondition: {
        required: true
      },
      homeChurchName: {
        required: true
      },
      denominaion: {
        required: true
      },
      churchAddress: {
        required: true
      },
      churchPhone: {
        required: true,
        digits: true
      },
      institutionName: {
        required: true
      },
      institutionCountry: {
        required: true
      },
      institutionAttendancePeriod: {
        required: true
      },
      institutionEarned: {
        required: true
      },
      transferCredit: {
        required: true
      },
      otherApplication: {
        required: true
      },
      personalSalvation: {
        required: true
      },
      dateOfEntry: {
        required: true
      },
      yearOfEntry: {
        required: true,
        digits: true,
        min: (new Date().getFullYear())
      },
      referenceHomeChurch: {
        required: true
      },
      referencePastoral: {
        required: true
      },
      referenceProfessional: {
        required: true
      },
      emergencyContactPhone: {
        digits: true
      },
      emergencyContactEmail: {
        email: true
      }
    },
    messages: {
      engLastName: "Please specify your name (only letters and spaces are allowed)",
      email: "Please specify a valid email address"
    },
    errorPlacement: function(error, element) {
      error.appendTo($(element).parents('.question'));
      // if (element.is(":radio"))
      //   error.appendTo($(element).parent('.question'));
      // // else if (element.is(":checkbox"))
      // //   error.appendTo(element.next());
      // else
      //   error.appendTo(element.parent().next());
    },
    submitHandler: function (form) {
      // form.submit();      
      submitBtn$.attr('disabled','disabled');
      submitBtn$.html('Submitting 提交中')
      submitWait$.show();
      
      $.ajax({
        url: '/register',
        type:'POST',
        data: form$.serialize()
      }).done(response => {
        console.log(response)
        submitWait$.hide();
        if (response.isSuccess){
          submitBtn$.html('submitted 提交完成')
          alert ('Application has been submitted successfully. Thanks for your application.');
          location.href = '/';
        }else{
          submitBtn$.html('submit 提交')
          alert("We are having some problems, please try again later.");
          submitBtn$.removeAttr('disabled');
        }
      })
    }
  });

})