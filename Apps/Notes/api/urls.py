from django.urls import path
from . import views


app_name = 'Notes.api'

urlpatterns = [

    path('<int:Note_id>/', views.NoteAPI.as_view(), name='Note'),

    path('', views.NotesAPI.as_view(), name='Notes'),
]
