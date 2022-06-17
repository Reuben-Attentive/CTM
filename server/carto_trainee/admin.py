
from django.contrib import admin
from carto_trainee.models import users

@admin.register(users)
class userAdmin(admin.ModelAdmin):
    list_display =('userid','username','password')