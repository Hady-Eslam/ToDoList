from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _



class Notes(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(_('Note Title'), max_length=100)
    note = models.CharField(_('Note'), max_length=1000)
    is_done = models.BooleanField(_('Is Note Done'), default=False)
    is_deleted = models.BooleanField(_('Is Note Deleted'), default=False)
    created_at = models.DateTimeField(_('Note Creation Date'), auto_now_add=True)
