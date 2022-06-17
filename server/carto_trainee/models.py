from django.db import models

# Create your models here.
class users(models.Model):
    userid = models.IntegerField()
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=150)

