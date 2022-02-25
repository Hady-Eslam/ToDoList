document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('Form').onsubmit = (event) => {
        
        document.getElementById('title-errors').innerText = ''
        document.getElementById('note-errors').innerText = ''


        Title = document.getElementById('title');
        if ( Title.value.length > 100 || Title.value.length < 1 ){
            event.preventDefault();
            Title.style.borderColor = 'red';
            document.getElementById('title-errors').innerText = 'Title Length Must Be > 0 and < 100';
        }


        Note = document.getElementById('note');
        if ( Note.value.length > 1000 || Note.value.length < 1 ){
            event.preventDefault();
            Note.style.borderColor = 'red';
            document.getElementById('note-errors').innerText = 'Note Length Must Be > 0 and < 1000';
        }
    }

}, false);
