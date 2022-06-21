from django.shortcuts import render    
from .models import users
from .serializers import UserSerializer
from rest_framework.renderers import JSONRenderer
from django.http import HttpRequest, HttpResponse, JsonResponse
import io
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login


def ctm_home(request):
    return HttpResponse('<h1>ctm_Homepage</h1>')



@csrf_exempt
def create_user(request):
    if request.method == 'POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        pythondata = JSONParser().parse(stream)
        print('pythondata----',pythondata)
        user_in = User.objects.create_user(username=pythondata['username'], email=pythondata['email'], password= pythondata['password'])
        print('user_in_id----------',user_in.id)
        resp = {
            'msg':'user created successfully',
            'user_id':user_in.id,
            'username':user_in.username,
            'email': user_in.email            
        }
        json_data = JSONRenderer().render(resp)
        return HttpResponse(json_data, content_type= 'application/json')
            # return JsonResponse()

@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        pythondata = JSONParser().parse(stream)
        user_login = authenticate(request, username=pythondata['username'], password=pythondata['password'])
        if user_login is not None:
            
            # A backend authenticated the credentials
            login(request, user_login)
            print('user_login_id----------',user_login.id)
            user_login_data ={
                "status":True,
                "user_id":user_login.id,
                "username":user_login.username,
                "email":user_login.email,
            }
            json_data = JSONRenderer().render(user_login_data)
            return HttpResponse(json_data, content_type= 'application/json')
            # return HttpResponse(user_login_data)
        else:
            # No backend authenticated the credentials
            resp = {'status':False}
            json_data = JSONRenderer().render(resp)
            return HttpResponse(json_data, content_type= 'application/json')
            # return HttpResponse(False)

