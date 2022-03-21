from django.urls import path
from . import views
urlpatterns = [
    path('',views.testview.as_view())
]
