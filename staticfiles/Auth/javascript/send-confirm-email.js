document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('Form').onsubmit = (event) => {
        
        document.getElementById('Email-Error').innerText = ''

        Email = document.getElementById('id_Email');
        if ( Email.value.length > 100 || Email.value.length < 1 ){
            event.preventDefault();
            Email.style.borderColor = 'red';
            document.getElementById('Email-Error').innerText = 'Email Length Must Be > 0 and < 100';
        }
        else if ( !Email.value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ) ){
            event.preventDefault();
            Email.style.borderColor = 'red';
            document.getElementById('Email-Error').innerText = 'Not Valid Email Address';
        }
    }

}, false);
