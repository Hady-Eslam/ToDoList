document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('Form').onsubmit = (event) => {
        
        document.getElementById('UserName-Error').innerText = ''
        document.getElementById('Password-Error').innerText = ''


        UserName = document.getElementById('id_UserName');
        if ( UserName.value.length > 100 || UserName.value.length < 1 ){
            event.preventDefault();
            UserName.style.borderColor = 'red';
            document.getElementById('UserName-Error').innerText = 'UserName Length Must Be > 0 and < 100';
        }

        Password = document.getElementById('id_Password');
        if ( Password.value.length > 100 || Password.value.length < 1 ){
            event.preventDefault();
            Password.style.borderColor = 'red';
            document.getElementById('Password-Error').innerText = 'Password Length Must Be > 0 and < 100';
        }
    }

}, false);
