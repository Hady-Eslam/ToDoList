from django.test import SimpleTestCase
from django.urls import reverse
from ... import helper
import requests, os



class TestApi(
    SimpleTestCase, helper.TestAPIHelper, helper.NoVersion, helper.InvalidVersion, helper.NotAuthenticated,
    helper.PostMethodNotAllowed, 
):
    def setUp(self) -> None:
        self._setUp(
            Production=True,
            API_Name='Get Note',
            URL=reverse('Notes.api:Note', kwargs={'Note_id': 1}),
            URL_Not_Found=reverse('Notes.api:Note', kwargs={'Note_id': 10}),
            Host=os.environ.get('HOST')
        )
        self._Authorize()


    def test_not_user_note(self):

        self._Authorize(os.environ.get('TEST_USER_USERNAME'), os.environ.get('TEST_USER_PASSWORD'))

        _response = requests.get(self._url, headers={
            'Version': 'V1',
            'Authorization': 'Bearer {0}'.format(self._Token)
        })

        self._print(_response)

        self.assertTrue(_response.status_code == 404, self._Message('Not User Note'))
    

    def test_note_not_found(self):

        _response = requests.get(self._url_not_found, headers={
            'Version': 'V1',
            'Authorization': 'Bearer {0}'.format(self._Token)
        })

        self._print(_response)

        self.assertTrue(_response.status_code == 404, self._Message('Note Not Found'))
    

    def test_get_note(self):

        _response = requests.get(self._url, headers={
            'Version': 'V1',
            'Authorization': 'Bearer {0}'.format(self._Token)
        })

        self._print(_response)

        self.assertTrue(_response.status_code == 200, self._Message('Get Note'))
