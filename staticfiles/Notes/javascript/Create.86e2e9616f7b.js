document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('Form').onsubmit = (event) => {
        
        document.getElementById('Title-Error').innerText = ''
        document.getElementById('Note-Error').innerText = ''


        Title = document.getElementById('id_Title');
        if ( Title.value.length > 100 || Title.value.length < 1 ){
            event.preventDefault();
            Title.style.borderColor = 'red';
            document.getElementById('Title-Error').innerText = 'Title Length Must Be > 0 and < 100';
        }


        Note = document.getElementById('id_Note');
        if ( Note.value.length > 1000 || Note.value.length < 1 ){
            event.preventDefault();
            Note.style.borderColor = 'red';
            document.getElementById('Note-Error').innerText = 'Note Length Must Be > 0 and < 1000';
        }
    }

}, false);
