var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbyfbm0ukw2h_D6QpGCOaXVaNyhYRCGnDCnbHmPEs7ozPEs9gGM/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
console.log("qwerty")