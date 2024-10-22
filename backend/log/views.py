# log/views.py

from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny
from rest_framework.authentication import SessionAuthentication
from .authentication import APIKeyAuthentication
from rest_framework import viewsets
from .models import Log
from .serializers import LogSerializer

class LogViewSet(viewsets.ModelViewSet):
    queryset = Log.objects.all()
    serializer_class = LogSerializer
    authentication_classes = [APIKeyAuthentication, SessionAuthentication]
    permission_classes = [AllowAny]
