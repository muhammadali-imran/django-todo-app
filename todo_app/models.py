from django.db import models

# Create your models here.
class todo_items(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=500)
    status = models.BooleanField(default=False)
    timeCreated = models.DateField(auto_now_add=True)
    timeUpdated = models.DateField(auto_now=True)
