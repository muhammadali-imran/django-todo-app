from django.shortcuts import render
from .models import todo_items
from .serializers import ToDoItemSerializer
from rest_framework import viewsets

class ToDoItemViewSet(viewsets.ModelViewSet):
    queryset = todo_items.objects.all()
    serializer_class = ToDoItemSerializer

# Create your views here.
def home(request):
    return render(request, "home.html")

def task_list(request):
    return render(request, "tasks.html")