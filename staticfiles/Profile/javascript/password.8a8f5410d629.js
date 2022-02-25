document.addEventListener('DOMContentLoaded', () => {

    _Model = document.getElementById('Changed');

    if (_Model != null){
        document.getElementById('ChangedButton').click();
    }

    document.getElementById('Form').onsubmit = (event) => {

        document.getElementById('Password-Error').innerText = ''
        document.getElementById('ConfirmPassword-Error').innerText = ''


        Password = document.getElementById('id_Password');
        if ( Password.value.length > 100 || Password.value.length < 1 ){
            event.preventDefault();
            Password.style.borderColor = 'red';
            document.getElementById('Password-Error').innerText = 'Password Length Must Be > 0 and < 100';
        }


        ConfirmPassword = document.getElementById('id_ConfirmPassword');
        if ( ConfirmPassword.value.length > 100 || ConfirmPassword.value.length < 1 ){
            event.preventDefault();
            ConfirmPassword.style.borderColor = 'red';
            document.getElementById('ConfirmPassword-Error').innerText = 'ConfirmPassword Length Must Be > 0 and < 100';
        }
        else if (Password.value != ConfirmPassword.value){
            event.preventDefault();
            ConfirmPassword.style.borderColor = 'red';
            document.getElementById('ConfirmPassword-Error').innerText = 'Password Does Not Match';
        }
    }

}, false);
