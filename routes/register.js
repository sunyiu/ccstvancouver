var express = require('express');
var router = express.Router();

var sgMail = require('@sendgrid/mail');
var sgKey = require('../keys/sendGrid');
sgMail.setApiKey(sgKey.apiKey);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('register/register');
});

router.post('/', function (req, res, next) {
  let html = 
    '<div><strong>Program</strong></div><div>'+ req.body.program +'</div><br/>' +
    '<br/>' +

    '<h3>Personal Information</h3>' +
    '<div><strong>English Last Name</strong></div><div>'+ req.body.engLastName +'</div><br/>' +
    '<div><strong>English First Name</strong></div><div>'+ req.body.engFirstName +'</div><br/>' +
    '<div><strong>English Middle Name</strong></div><div>'+ req.body.engMiddleName +'</div><br/>' +
    '<div><strong>Preferred Name</strong></div><div>'+ req.body.preferredName +'</div><br/>' +
    '<div><strong>Chinese Name</strong></div><div>'+ req.body.chineseName +'</div><br/>' +
    '<div><strong>Home Address</strong></div><div>'+ req.body.homeAddress +'</div><br/>' +
    '<div><strong>Home Apartment Num</strong></div><div>'+ req.body.homeAptNum +'</div><br/>' +
    '<div><strong>Home Street</strong></div><div>'+ req.body.homeStreet +'</div><br/>' +
    '<div><strong>Home City</strong></div><div>'+ req.body.homeCity +'</div><br/>' +
    '<div><strong>Home Province</strong></div><div>'+ req.body.homeProvince +'</div><br/>' +
    '<div><strong>Home Postal Code</strong></div><div>'+ req.body.homePostalCode +'</div><br/>' +
    '<div><strong>Home Country</strong></div><div>'+ req.body.homeCountry +'</div><br/>' +
    '<div><strong>Home Mailing Address</strong></div><div>'+ req.body.homeMailingAddress +'</div><br/>' +
    '<div><strong>Home Phone</strong></div><div>'+ req.body.homePhone +'</div><br/>' +
    '<div><strong>Home Mobile</strong></div><div>'+ req.body.mobile +'</div><br/>' +
    '<div><strong>Business Phone</strong></div><div>'+ req.body.businessPhone +'</div><br/>' +
    '<div><strong>Email</strong></div><div>'+ req.body.email +'</div><br/>' +
    '<div><strong>Birthday</strong></div><div>'+ req.body.birthday +'</div><br/>' +
    '<div><strong>Birth Country</strong></div><div>'+ req.body.birthCountry +'</div><br/>' +
    '<div><strong>Gender</strong></div><div>'+ req.body.gender +'</div><br/>' +
    '<div><strong>Martial Status</strong></div><div>'+ req.body.martialStatus +'</div><br/>' +
    '<div><strong>SpouseName</strong></div><div>'+ req.body.spouseName +'</div><br/>' +
    '<div><strong>Immigration Status</strong></div><div>'+ req.body.immigrationStatus +'</div><br/>' +
    '<div><strong>Social Insurance Num</strong></div><div>'+ req.body.socialInsuranceNum +'</div><br/>' +
    '<div><strong>Health Card Num</strong></div><div>'+ req.body.healthCardNum +'</div><br/>' +
    '<div><strong>Physican Name</strong></div><div>'+ req.body.physicanName +'</div><br/>' +
    '<div><strong>Medical Condition</strong></div><div>'+ req.body.medicalCondition +'</div><br/>' +
    '<br/>' +

    '<h3>Chruch Information</h3>' +
    '<div><strong>Home Church Name</strong></div><div>'+ req.body.homeChurchName + '</div><br/>' +
    '<div><strong>Denomination</strong></div><div>'+ req.body.denomination + '</div><br/>' +
    '<div><strong>Church Address</strong></div><div>'+ req.body.churchAddress + '</div><br/>' +
    '<div><strong>Church Phone</strong></div><div>'+ req.body.churchPhone + '</div><br/>' +
    '<br/>' +

    '<h3>Educational Background</h3>' +
    '<div><strong>Institution Name</strong></div><div>'+ req.body.institutionName +'</div><br/>' +
    '<div><strong>Institution Country</strong></div><div>'+ req.body.institutionCountry +'</div><br/>' +
    '<div><strong>Institution Attendance Period</strong></div><div>'+ req.body.institutionAttendancePeriod +'</div><br/>' +
    '<div><strong>Institution Earned</strong></div><div>'+ req.body.institutionEarned +'</div><br/>' +
    '<div><strong>Transfer Cedit</strong></div><div>'+ req.body.transferCredit +'</div><br/>' +
    '<br/>' +

    '<h3>Application to other Seminary or University</h3>' +
    '<div><strong>Other Application</strong></div><div>'+ req.body.otherApplication +'</div><br/>' +
    '<div><strong>English Requirement</strong></div><div>'+ req.body.englishRequirement +'</div><br/>' +
    '<div><strong>English Requirement Date</strong></div><div>'+ req.body.englishRequirementDateTaken +'</div><br/>' +
    '<div><strong>English Requirement Score</strong></div><div>'+ req.body.englishRequirementScore +'</div><br/>' +
    '<br/>' +

    '<h3>Calling Testimony</h3>' +
    '<div><strong>Personal Salvation</strong></div><div>'+ req.body.personalSalvation +'</div><br/>' +
    '<div><strong>Spouse Support Letter</strong></div><div>'+ req.body.spouseSupportLetter +'</div><br/>' +
    '<div><strong>Research Paper</strong></div><div>'+ req.body.researchPaper +'</div><br/>' +
    '<br/>' +

    '<h3>Planned Date of Entry</h3>' +
    '<div><strong>Date of Entry</strong></div><div>'+ req.body.dateOfEntry +'</div><br/>' +
    '<div><strong>Year of Entry</strong></div><div>'+ req.body.yearOfEntry +'</div><br/>' +
    '<br/>' +

    '<h3>Your Referees</h3>' +
    '<div><strong>Reference Home Church</strong></div><div>'+ req.body.referenceHomeChurch +'</div><br/>' +
    '<div><strong>Reference Pastoral</strong></div><div>'+ req.body.referencePastoral +'</div><br/>' +
    '<div><strong>Reference Professional</strong></div><div>'+ req.body.referenceProfessional +'</div><br/>' +
    '<br/>' +

    '<h3>Emergency Contact</h3>' +
    '<div><strong>Emergency Contact</strong></div><div>'+ req.body.emergencyContact +'</div><br/>' +
    '<div><strong>Emergency Contact Name</strong></div><div>'+ req.body.emergencyContactName +'</div><br/>' +
    '<div><strong>Emergency Contact Address</strong></div><div>'+ req.body.emergencyContactAddress +'</div><br/>' +
    '<div><strong>Emergency Contact Phone</strong></div><div>'+ req.body.emergencyContactPhone +'</div><br/>' +
    '<div><strong>Emergency Contact Email</strong></div><div>'+ req.body.emergencyContactEmail +'</div>' +
    
    '<div><strong>Signature</strong></div><div>'+ req.body.signature +'</div>' +
    '<div><strong>Signature Date</strong></div><div>'+ req.body.signatureDate +'</div>'
    ; 


    const msg = {
      to: 'application@ccstvan.ca',
      from: 'tech@ccstvan.ca',
      subject: req.body.engFirstName + ', ' + req.body.engLastName + ' has submitted a registration form',
      contentType: 'text/html',
      html: html,
      attachments: [
        {
          content: req.body.portraitEncoded,
          // filename: req.body.portraitName,
          filename: 'attachment.png',
          type: req.body.portraitType,
          disposition: 'attachment',
          contentId: 'portait'
        },
        {
          content: req.body.personalSalvationEncoded,
          // filename: req.body.portraitName,
          filename: 'personalSalvation.pdf',
          type: req.body.personalSalvationType,
          disposition: 'attachment',
          contentId: 'personalSalvation'          
        }
      ]
    } ;

    if (req.body.researchPaperEncoded){
      msg.attachments.add({
        content: req.body.researchPaperEncoded,
        // filename: req.body.portraitName,
        filename: 'researchPaper.pdf',
        type: req.body.researchPaperType,
        disposition: 'attachment',
        contentId: 'researchPaper' 
      })
    }

    sgMail.send(msg).then((result) => {
      res.send({'isSuccess': true});
    }).catch((err) => {
      res.send({'isSuccess': false});
    })
});


module.exports = router;