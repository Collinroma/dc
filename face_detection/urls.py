from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('drivecaredetection/', views.index, name='drivecaredetection'),
    path('video_feed/', views.video_feed_view, name='video_feed'),
    path('get_alert_count/', views.get_alert_count, name='get_alert_count'),
]