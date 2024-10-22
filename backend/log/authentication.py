# log/authentication.py

from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.conf import settings

class APIKeyAuthentication(BaseAuthentication):
    def authenticate(self, request):
        api_key = request.headers.get('X-API-Key')
        
        if not api_key:
            return None  # No API key passed, skip authentication
        
        # You can store the valid API key(s) in settings or in a database
        valid_api_key = settings.API_KEY
        
        if api_key != valid_api_key:
            raise AuthenticationFailed('Invalid API Key')

        # Return user (or None if anonymous access allowed) and the auth object
        return (None, None)
