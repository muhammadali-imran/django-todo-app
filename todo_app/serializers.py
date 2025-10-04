from rest_framework import serializers
from .models import todo_items

class ToDoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = todo_items
        fields = ["id", "title", "done"]
        