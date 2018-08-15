


$(document).ready(function() {  
    
    $('.tel-input').inputmask('+9(999)999-99-99');  //static mask

    function buttonDisable(elem) {

        var empty = false;

        elem.parents('.form').find('input, textarea').not('input[type="hidden"]').each(function() {
            if ($(this).val().length == 0 || 
            (elem.parents('.form').find('input.required-checkbox').length > 0 && (!(elem.parents('.form').find('input.required-checkbox').is(':checked'))))) {
                empty = true;
            }
        });

        if (empty) {
            elem.parents('.form').find('[type="submit"]').attr('disabled', 'disabled');
        } else {
            elem.parents('.form').find('[type="submit"]').attr('disabled', false);
        }
    }

    $('body').on('change keyup', '.form input', function() {
        buttonDisable($(this));
    });


    $('body').on('submit', '.form', function(e) {

        e.preventDefault();
        var form = $('.form');
        var error = false;

        var email = $('.email-input').val();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        // Validate Email 
        if (email.match(emailReg)) {
            form.find('.email-input').parent('.form-group').removeClass('has-error');
        } else {
            form.find('.email-input').parent('.form-group').addClass('has-error');
            var error = true;
        }

        var pass = $('#password').val();
        var pass_repeat = $('#password-repeat').val();

        console.log(pass, pass_repeat);

        // Validate Password
        if (pass.match(pass_repeat)) {
            form.find('.password-input').parent('.form-group').removeClass('has-error');
        } else {
            form.find('.password-input').parent('.form-group').addClass('has-error');
            var error = true;
        }


        if (error == false) { 
            
            let nextModal = $(this).find('.next-modal').data('target');
            console.log(nextModal);
            $(this).closest('.modal').modal('hide');
            setTimeout(function(){
                $(nextModal).modal('show');
            }, 500)            

            // $.ajax({
            //     url: '/contact.php?type=ajax',
            //     type: 'POST',
            //     async:    false,
            //     data: $('.order-form').serialize(),
            //     beforeSend: function(){
            //         $(this).find('input[type="submit"]').attr({ 'disabled': 'true', 'value': 'In process...' });
            //     },
            //     success: function(result) {
            //         if (result == 'sent') {
            //             $('.order-form input').val('');  
            //             $('.order-form').find('input[type="submit"]').attr('value', 'Get a Free White Paper'); 
            //             // $('.policy-hidden-link').trigger( "click" );
            //             $('#success-window').modal('show'); 
            //             setTimeout(function() { 
            //                 $('#success-window').modal('hide');
            //             }, 3000); 
            //             window.open($('.policy-hidden-link').attr('href'),'_blank'); 
                        
            //         } else {
            //             if (result != '') {
            //                 $('#fail-window .modal-body').html(result);
            //             }
            //             $('#fail-window').modal('show');
            //             setTimeout(function() { $('#fail-window').modal('hide'); }, 5000);
            //             $('.order-form').find('input[type="submit"]').attr('value', 'Get a Free White Paper');
            //         }

            //     },
            //     error: function(a, b, c) {
            //         console.log(a, b, c);
            //     }

            // });
        }

    });

});