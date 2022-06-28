from dataclasses import fields
from rest_framework import serializers
from .models import users
from .models import moduleData

class UserSerializer(serializers.Serializer):
    userid = serializers.IntegerField()
    username = serializers.CharField(max_length=50)
    password = serializers.CharField(max_length=150)

    def create(self, validate_data):
        return users.objects.create(**validate_data)

# class moduleDataSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = moduleData
        # fields = ['module_id','module_name','module_description','module_imageUrl','module_demoUrl','module_text','module_sampleUrl']

class moduleDataSerializer(serializers.Serializer):
    module_id           =serializers.CharField(max_length=150)
    module_name         =serializers.CharField(max_length=150)
    module_description  =serializers.CharField(max_length=950)
    module_imageUrl     =serializers.URLField(max_length=250)
    module_demoUrl      =serializers.URLField(max_length=250)
    module_text         =serializers.CharField(max_length=1950)
    module_sampleUrl    =serializers.URLField(max_length=250)
