$(document).ready(function(){

    $('form').submit(function(e){
        e.preventDefault();
        if(!$('input[name=name]').val()){
            alert('Name field is required');
            return;
        }
        if(!$('input[name=email]').val()){
            alert('Email field is required.');
            return;
        }

        if(!$('input[name=phone]').val()){
            alert('Phone field is required.');
            return;
        }

        if(!$('textarea[name=message]').val()){
            alert('Message field is required.');
            return;
        }

        $('#success_message').show();
    });
  
  });