from django.test import SimpleTestCase
from django.urls import reverse
from ... import helper
import requests, os




class TestApi(
    SimpleTestCase, helper.TestAPIHelper, helper.NoVersion, helper.InvalidVersion, helper.NotAuthenticated,
    helper.DeleteMethodNotAllowed, helper.PostInvalidData
):
    def setUp(self) -> None:
        self._setUp(
            Production=True,
            API_Name='Create Note',
            URL=reverse('Notes.api:Notes'),
            Host=os.environ.get('HOST')
        )
        self._Authorize()


    def test_create_note(self):

        _response = requests.post(self._url, headers={
            'Version': 'V1',
            'Authorization': 'Bearer {0}'.format(self._Token)
        }, data={
            'title': 'Test Note API',
            'note': 'This is Test Note API'
        })

        self._print(_response)

        self.assertTrue(_response.status_code == 201, self._Message('Create Note'))
