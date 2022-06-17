from rest_framework import serializers
from .models import users

class UserSerializer(serializers.Serializer):
    userid = serializers.IntegerField()
    username = serializers.CharField(max_length=50)
    password = serializers.CharField(max_length=150)

    def create(self, validate_data):
        return users.objects.create(**validate_data)
