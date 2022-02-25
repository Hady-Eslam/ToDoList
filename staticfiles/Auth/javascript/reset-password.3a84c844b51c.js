document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('Form').onsubmit = (event) => {
        
        document.getElementById('Password-Error').innerText = ''
        document.getElementById('Confirm-Password-Error').innerText = ''
        

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
