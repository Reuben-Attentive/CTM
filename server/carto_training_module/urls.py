
from django.contrib import admin
from django.urls import path
from carto_trainee import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.ctm_home),
    path('createuser/', views.create_user),
    path('loginuser/', views.login_user),
    path('moduleData/', views.module_data),

    
    # path('userinfo/<int:pk>', views.user_detail),
]
