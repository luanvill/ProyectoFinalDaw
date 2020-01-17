from rest_framework import serializers
from fcsh.models import Administrador, Cliente, Noticia, Materia, Carrera, Termino, Registro, Usuario, Descarga

class AdministradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Administrador
        fields = ('idAdministrador', 'nombreAdministrador')

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('idCliente', 'nombreCliente', 'usuarioCliente', 'passwordCliente', 'estadoCliente', 'correoCliente')

class NoticiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Noticia
        fields = ('idNoticia', 'idCliente', 'nombreNoticia', 'descrNoticia')

class MateriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Materia
        fields = ('idMateria', 'nombreMateria')

class CarreraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrera
        fields = ('idCarrera', 'nombreCarrera')

class TerminoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Termino
        fields = ('idTermino', 'nombreTermino')

class RegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registro
        fields = ('idRegistro', 'idTermino', 'idMateria')

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('idUsuario', 'nombreUsuario', 'apellidoUsuario', 'correoUsuario')

class DescargaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Descarga
        fields = ('idDescarga', 'idUsuario', 'fechaDescarga')