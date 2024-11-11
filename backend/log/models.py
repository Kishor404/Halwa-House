# log/models.py

from django.db import models
from django.contrib.auth.hashers import make_password

class Log(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    password = models.CharField(max_length=255, blank=False, null=False)
    address = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True, unique=True)
    phone = models.CharField(max_length=255, blank=False, null=False, unique=True)
    dob = models.CharField(max_length=255, blank=False, null=False)
    cart = models.JSONField(default={})
    created = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        # Hash the password before saving
        if not self.password.startswith('pbkdf2_sha256$'):
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
