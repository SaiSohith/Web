from django.urls import path
from . import views
urlpatterns = [
    path('',views.getDate,name="getdata")
]
