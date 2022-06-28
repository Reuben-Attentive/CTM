from django.db import models

# Create your models here.
class users(models.Model):
    userid = models.IntegerField()
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=150)

class moduleData(models.Model):
    module_id           =models.CharField(max_length=150)
    module_name         =models.CharField(max_length=150)
    module_description  =models.CharField(max_length=950)
    module_imageUrl     =models.URLField(max_length=250)
    module_demoUrl      =models.URLField(max_length=250)
    module_text         =models.CharField(max_length=1950)
    module_sampleUrl    =models.URLField(max_length=250)