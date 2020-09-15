$(document).ready(function() {
    $('#contact').submit(function(e) {
      const name    = document.getElementById('inputName'),
          email   = document.getElementById('inputEmail'),
          subject   = document.getElementById('inputSubject'),
          message = document.getElementById('inputMessage');
  
      if (!name.value || !email.value || !subject.value || !message.value) {
        alertify.error("Please check your entries");
        return false;
      } else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/vocuslocus@gmail.com',
          data: $('#contact').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        alertify.success("Message sent");
      }
    });
  });