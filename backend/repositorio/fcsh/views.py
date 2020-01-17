from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse, JsonResponse

from fcsh.models import Administrador
from fcsh.serializers import AdministradorSerializer

from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def get_data(request):
	data = Administrador.objects.all()
	if request.method == 'GET':
		serializer = AdministradorSerializer(data, many=True)
		return JsonResponse(serializer.data, safe=False)
