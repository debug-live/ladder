# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse


def index(request):
    return render(request, 'index.html')


def get_languages(request):
    languages = [{
          "id": "cxx",
          "desc": "C/C++"
        },
        {
          "id": "java",
          "desc": "Java"
        }]

    return JsonResponse(languages, safe=False)