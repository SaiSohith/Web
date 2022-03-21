from django.shortcuts import render, HttpResponse 
# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response

class testview(APIView):
    def post(self,request):
        # print(request.data)
        return Response("Success")