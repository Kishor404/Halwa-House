# log/serializers.py

from rest_framework import serializers
from .models import Log

class LogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Log
        fields = ['id', 'name', 'password', 'address', 'email', 'phone', 'created']
        extra_kwargs = {'password': {'write_only': True}}  # Makes password write-only
