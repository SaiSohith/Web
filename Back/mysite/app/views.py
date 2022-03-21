from django.shortcuts import render, HttpResponse

# Create your views here.

def getDate(request):
    print(request.POST)
    return HttpResponse("hello")