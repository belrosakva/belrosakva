document.addEventListener('DOMContentLoaded', function() {
  $('#feedbackForm').on('submit',function(e) {
    e.preventDefault();

    var form = $(this);

    var validationErrors = [];

    var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLScstxzhpEb3sMs6iFtz8QAv_TCKlRXNqeXR-cP8gdg2JmSqhg/formResponse?';

    var nameRef    = 'entry.573908097=';
    var phoneRef   = 'entry.257040727=';
    var emailRef   = 'entry.1294816824=';
    var commentRef = 'entry.830014063=';
    var submitRef  = 'submit=178870647337118393';

    var nameValue    = encodeURIComponent($('#placeholder1').val());
    var phoneValue   = encodeURIComponent($('.js-phonemask-result').val());
    var emailValue   = encodeURIComponent($('#placeholder3').val());
    var commentValue = encodeURIComponent($('#placeholder4').val());

    var params = [
      nameRef + nameValue,
      phoneRef + phoneValue,
      emailRef + emailValue,
      commentRef + commentValue,
      submitRef
    ].join('&');

    var submitURL = baseURL + params;

    // $(this)[0].action = submitURL;

    $('#placeholder3').siblings('.t-input-error').hide();

    if (emailValue.length == 0) {
      validationErrors.push('email');

      $('#placeholder3').siblings('.t-input-error').show().text('обязательное поле');
    }

    if (validationErrors.length == 0) {
      $.ajax({
        url: submitURL,
        type: 'POST',
        crossDomain: true,
        success: function() {
        },
        error: function() {
          $('#formSubmit').text('Спасибо! Мы получили ваше сообщение и ответим как можно скорее.');
          form.find("input[type=text], input[type=tel], textarea").val("");
        }
      });
    }
  });
});