from django.shortcuts import render, HttpResponse 
# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from urllib.request import urlopen

class testview(APIView):
    def post(self,request):
        data=request.data.get('d')
        response = urlopen(data)
        with open('image.jpg', 'wb') as f:
            f.write(response.file.read())
        return Response("Success")