from django.db import models

# Create your models here.
class todo_items(models.Model):
    title = models.CharField(max_length=200)
    done = models.BooleanField(default=False)