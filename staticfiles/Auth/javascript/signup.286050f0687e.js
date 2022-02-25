document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('Form').onsubmit = (event) => {
        
        document.getElementById('Name-Error').innerText = ''
        document.getElementById('UserName-Error').innerText = ''
        document.getElementById('Email-Error').innerText = ''
        document.getElementById('Password-Error').innerText = ''
        document.getElementById('Confirm-Password-Error').innerText = ''


        Name = document.getElementById('id_Name');
        if ( Name.value.length > 100 || Name.value.length < 1 ){
            event.preventDefault();
            Name.style.borderColor = 'red';
            document.getElementById('Name-Error').innerText = 'Name Length Must Be > 0 and < 100';
        }

        UserName = document.getElementById('id_UserName');
        if ( UserName.value.length > 100 || UserName.value.length < 1 ){
            event.preventDefault();
            UserName.style.borderColor = 'red';
            document.getElementById('UserName-Error').innerText = 'UserName Length Must Be > 0 and < 100';
        }

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

        Password = document.getElementById('id_Password');
        if ( Password.value.length > 100 || Password.value.length < 1 ){
            event.preventDefault();
            Password.style.borderColor = 'red';
            document.getElementById('Password-Error').innerText = 'Password Length Must Be > 0 and < 100';
        }

        Confirm_Password = document.getElementById('Confirm-Password');
        if ( Password.value != Confirm_Password.value ){
            event.preventDefault();
            Confirm_Password.style.borderColor = 'red';
            document.getElementById('Confirm-Password-Error').innerText = 'Password Does Not Match';
        }
    }

}, false);
