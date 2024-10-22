# log/models.py

from django.db import models

class Log(models.Model):
    name = models.CharField(max_length=255,blank=False,null=False)
    password=models.CharField(max_length=255,blank=False,null=False)
    address=models.CharField(max_length=255,blank=True,null=True)
    email=models.CharField(max_length=255,blank=True,null=True,unique=True)
    phone=models.CharField(max_length=255,blank=False,null=False,unique=True)
    dob=models.CharField(max_length=255,blank=False,null=False)
    cart=models.JSONField(default={})
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
