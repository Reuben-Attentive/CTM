
from django.contrib import admin
from carto_trainee.models import users
from carto_trainee.models import moduleData

@admin.register(users)
class userAdmin(admin.ModelAdmin):
    list_display =('userid','username','password')

@admin.register(moduleData)
class moduleDataAdmin(admin.ModelAdmin):
    list_display =('module_id','module_name','module_description','module_imageUrl','module_demoUrl','module_text','module_sampleUrl')