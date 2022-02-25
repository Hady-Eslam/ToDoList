import os
from django.conf import settings
from django.apps import AppConfig


class NotesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    path = os.path.join(settings.BASE_DIR, 'Apps', 'Notes')
    verbose_name = 'App For Notes'
    name = 'Apps.Notes'
    label = 'Notes'
