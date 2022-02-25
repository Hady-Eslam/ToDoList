from django.test import SimpleTestCase
from django.urls import reverse
from ... import helper
import requests, os




class TestApi(
    SimpleTestCase, helper.TestAPIHelper, helper.NoVersion, helper.InvalidVersion, helper.NotAuthenticated,
    helper.DeleteMethodNotAllowed, 
):
    def setUp(self) -> None:
        self._setUp(
            Production=True,
            API_Name='Get User Notes',
            URL=reverse('Notes.api:Notes'),
            Host=os.environ.get('HOST')
        )
        self._Authorize()    


    def test_notes(self):

        _response = requests.get(self._url, headers={
            'Version': 'V1',
            'Authorization': 'Bearer {0}'.format(self._Token)
        })

        self._print(_response)

        self.assertTrue(_response.status_code == 200, self._Message('Get Notes'))
