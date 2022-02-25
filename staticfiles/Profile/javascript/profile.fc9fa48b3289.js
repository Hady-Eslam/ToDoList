document.addEventListener('DOMContentLoaded', () => {

    _Model = document.getElementById('Changed');

    if (_Model != null){
        document.getElementById('ChangedButton').click();
    }

    document.getElementById('Form').onsubmit = (event) => {

        document.getElementById('Name-Error').innerText = ''
        document.getElementById('Bio-Error').innerText = ''


        Name = document.getElementById('id_Name');
        if ( Name.value.length > 100 ){
            event.preventDefault();
            Name.style.borderColor = 'red';
            document.getElementById('Name-Error').innerText = 'Name Length Must Be <= 100';
        }


        Bio = document.getElementById('id_Bio');
        if ( Bio.value.length > 100 ){
            event.preventDefault();
            Bio.style.borderColor = 'red';
            document.getElementById('Bio-Error').innerText = 'Bio Length Must Be <= 100';
        }

    }

}, false);
