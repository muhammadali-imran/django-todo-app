from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ToDoItemViewSet, home, task_list

router = DefaultRouter()
router.register(r'todos', ToDoItemViewSet)

urlpatterns = [
    path("", home, name="home"),
    path("tasks/", task_list, name="task_list"),
    path("api/", include(router.urls)),
]