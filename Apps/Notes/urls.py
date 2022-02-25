from django.urls import path, include
from . import views


app_name = 'Notes'

urlpatterns = [

    path('create/', views.CreateNoteView.as_view(template_name='Notes/Create.html'), name='Create'),

    path('<int:Note_id>/', views.NoteView.as_view(), name='Note'),

    path('', views.NotesView.as_view(template_name='Notes/Notes.html'), name='Home'),
]
