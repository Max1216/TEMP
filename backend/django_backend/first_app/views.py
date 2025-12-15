from django.shortcuts import render, redirect
from .forms import UserRegistrationForm, UserLoginForm
from .models import Student
import json
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.contrib.auth import authenticate

def students(request):
    students = [
        {'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doe@example.com'},
        {'first_name': 'Jane', 'last_name': 'Smith', 'email': 'jane.smith@example.com'}
    ]
    return render(request, 'student_template.html', context={'students': students})

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserRegistrationForm()
        return render(request, 'register.html', context={'form': form})

def login_form(request):
    if request.method == 'POST':
        form = UserLoginForm(request.POST)

        user = authenticate(
            username=request.POST['username'],
            password=request.POST['password']
        )

        if form.is_valid():
            return HttpResponse("Login successful")
    form = UserLoginForm()
    return render(request, 'login.html', context={'form': form})

@csrf_exempt
def student_save(request):
    if request.method == 'POST':
        body = request.body
        json_data = json.loads(body)

        first_name = json_data.get('first_name')
        last_name = json_data.get('last_name')
        email = json_data.get('email')

        student = Student(first_name=first_name, last_name=last_name, email=email)
        student.save()
        return HttpResponse({"message": "Student saved successfully"})
    else:
        raise ValueError("Invalid request method")
