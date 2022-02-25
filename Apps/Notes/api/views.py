from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .serializers import NotesSerializer, NoteSerializer
from .mixins import BaseNotesAPI
from ..models import Notes



class NotesAPI(BaseNotesAPI, ListCreateAPIView):
    throttle_scope = 'notes', '100/sec'
    serializer_class = NotesSerializer

    def get_queryset(self):
        return Notes.objects.filter(user=self.request.user, is_deleted=False).order_by('-id')
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class NoteAPI(BaseNotesAPI, RetrieveUpdateDestroyAPIView):
    throttle_scope = 'note', '100/sec'
    serializer_class = NoteSerializer
    lookup_url_kwarg = 'Note_id'

    def get_queryset(self):
        return Notes.objects.filter(user=self.request.user, is_deleted=False)
    
    def perform_update(self, serializer):
        serializer.save(is_done=True)
    
    def perform_destroy(self, instance):
        instance.is_done = False
        instance.save()
