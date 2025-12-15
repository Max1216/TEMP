from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('students/', views.students),
    path('register/', views.register),
    path('login/', views.login_form, name='login'),
    path('save_student/', views.student_save),
]
