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
        user_in = User.objects.create_user(pythondata['username'], 'lennon@thebeatles.com', pythondata['password'])
        
        resp = {'msg':'user created'}
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
            return HttpResponse(True)
        else:
            # No backend authenticated the credentials
            # resp = {'msg':False}
            # json_data = JSONRenderer().render(resp)
            # return HttpResponse(json_data, content_type= 'application/json')
            return HttpResponse(False)

