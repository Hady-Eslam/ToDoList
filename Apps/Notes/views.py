from django.views import View
from django.urls import reverse_lazy as reverse
from django.views.generic import ListView, CreateView
from django.http import Http404, HttpRequest, JsonResponse
from Apps.Auth.mixins import LoginRequiredMixin, SuccessMessageMixin
from Apps.Profile.mixins import ProfileMixin
from .models import Notes



class NotesView(LoginRequiredMixin, ProfileMixin, ListView):
    def get_queryset(self):
        return Notes.objects.filter(user=self.request.user, is_deleted=False).order_by('-id')


class CreateNoteView(LoginRequiredMixin, ProfileMixin, SuccessMessageMixin, CreateView):
    success_flash_message_name = 'success_create_note'
    success_flash_message = 'Note Created Successfully'

    success_url = reverse('Notes:Home')

    model = Notes
    fields = ['title', 'note']

    def form_valid(self, form):
        _Note = form.save(commit=False)
        _Note.user = self.request.user
        _Note.save()
        return super().form_valid(form)


class NoteView(LoginRequiredMixin, View):

    def handle_object(self, is_done=True, status=200):
        _Note = Notes.objects.filter(id=self.kwargs['Note_id'], user=self.request.user, is_deleted=False)\
            .first()
        if _Note is None: raise Http404('Note Not Found')
        _Note.is_done = is_done
        _Note.save()
        return JsonResponse({}, status=status)


    def patch(self, request: HttpRequest, Note_id):
        return self.handle_object()
    
    def delete(self, request: HttpRequest, Note_id):
        return self.handle_object(False, 204)
