from rest_framework import serializers
from ..models import Notes


class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        exclude = ['is_deleted']
        read_only_fields = ['is_done', 'created_at', 'user']


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        exclude = ['is_deleted']
        read_only_fields = ['title', 'note', 'user']
