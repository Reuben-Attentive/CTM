import requests
import json

URL= "http://127.0.0.1:8000/loginuser/"

data ={
    # 'userid':'109',
    'username':'hariansh',
    'password':'qwerty@123'
    }
    # data is in python using dumps to convert it into json

json_data = json.dumps(data)
   
# res= requests.get(url = URL) 
res = requests.post(url = URL, data= json_data)

response_data= res.json()

print(response_data)