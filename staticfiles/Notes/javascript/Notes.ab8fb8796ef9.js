function ChangeState(_Element){

    _Note_id = _Element.getAttribute('note-id');
    _Note_Url = _Element.getAttribute('note-url');

    if ( _Note_id == null ){
        return
    }

    isChecked = _Element.checked;

    _Title = document.getElementById('Title_' + _Note_id);
    _Note = document.getElementById('Note_' + _Note_id);

    $.ajax(_Note_Url , {

        type: ( isChecked ) ? 'PATCH' : 'DELETE',

        headers: { 
            "X-CSRFToken": document.getElementsByName('csrfmiddlewaretoken')[0].value
        },

        success: function (data, status, xhr) {
            console.log(data)
            console.log(status)
            console.log(xhr)
            if (isChecked){
                _Title.style.textDecoration = 'line-through';
                _Note.style.textDecoration = 'line-through';
            }
            else{
                _Title.style.textDecoration = '';
                _Note.style.textDecoration = '';
            }
        },

        error: function (jqXhr, textStatus, errorMessage) {
            console.log(errorMessage);
            if ( isChecked ){
                _Element.checked = false;
                alert('Error Ocurred in UnChecking The Note');
            }
            else{
                _Element.checked = true;
                alert('Error Occured in Checking The Note');
            }
        }
    });
}



function CheckState(_Element){

    _isChecked = _Element.getAttribute('isChecked');
    _Note_id = _Element.getAttribute('note-id');

    if ( !_isChecked || !_Note_id ){
        return
    }

    _isChecked = ( _isChecked == 'True' ) ? true : false;

    _Title = document.getElementById('Title_' + _Note_id);
    _Note = document.getElementById('Note_' + _Note_id);

    if ( _isChecked ){
        _Element.checked = true;
        _Title.style.textDecoration = 'line-through';
        _Note.style.textDecoration = 'line-through';
    }
    else{
        _Element.checked = false;
        _Title.style.textDecoration = '';
        _Note.style.textDecoration = '';
    }
}


document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.CheckBox').forEach(element => {
        CheckState(element)
    });

}, false);
