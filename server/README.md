# FX Training Module (Server)

- This folder contains all source code related to the server side. Django is used for building the web server.

## Getting started

- Install [https://www.python.org/downloads/](Python) and pip.

- Run the following commands to check whether or not Python and pip is installed properly.
```
python --version
pip --version
```

- Clone this repo
```
git clone https://github.com/Reuben-Attentive/CTM.git
```

- Go to server folder
```
cd server
```

- Install virtualenv to create a virtual environment.
```
pip install virtualenv
virtualenv venv
```

- Activate the virtual environment.
```
venv\Scripts\activate
```

- Install dependencies using pip.
```
pip install -r requirements.txt
```

- Make migrations.
```
python manage.py makemigrations
python manage.py migrate
```

- Run the server.
```
python manage.py runserver
```

- Go to http://127.0.0.1:8000/

- The admin site can be seen at http://127.0.0.1:8000/admin. Credentails for the same are username: superuser and password: superuser.

## Project status
Ongoing