from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import JSONRenderer
from .versioning import Versioning
from .throttles import NotesThrottleClass


class BaseNotesAPI:
    permission_classes = [IsAuthenticated]
    throttle_classes = [NotesThrottleClass]
    renderer_classes = [JSONRenderer]
    versioning_class = Versioning
