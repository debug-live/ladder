from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^languages$', views.get_languages, name='get_languages'),
    url(r'^build$', views.build, name='build'),
]