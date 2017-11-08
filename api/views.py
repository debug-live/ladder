# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse


def index(request):
    return render(request, 'index.html')


def get_languages(request):
    languages = {
        'data': [{
          "id": "cxx",
          "desc": "C/C++"
        }, {
          "id": "java",
          "desc": "Java"
        }],
        'sign': '0'
    }

    return JsonResponse(languages)


def build(request):
    print request.body
    return HttpResponse(status=201) # FIXME