from django.db import models

# Create your models here.
class Administrador(models.Model):
	idAdministrador = models.AutoField(primary_key=True)
	nombreAdministrador =  models.CharField(max_length=100)

class Cliente(models.Model):
	idCliente = models.AutoField(primary_key=True)
	nombreCliente = models.CharField(max_length=100)
	usuarioCliente = models.CharField(max_length=100)
	passwordCliente =  models.CharField(max_length=100)
	estadoCliente = models.IntegerField(default=0)
	correoCliente = models.CharField(max_length=100)

class Noticia(models.Model):
	idNoticia = models.AutoField(primary_key=True)
	idCliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
	nombreNoticia = models.CharField(max_length=100)
	descrNoticia = models.CharField(max_length=400)

class Materia(models.Model):
	idMateria = models.AutoField(primary_key=True)
	nombreMateria = models.CharField(max_length=100)

class Carrera(models.Model):
	idCarrera = models.AutoField(primary_key=True)
	nombreCarrera = models.CharField(max_length=150)

class Termino(models.Model):
	idTermino = models.AutoField(primary_key=True)
	nombreTermino = models.CharField(max_length=50)

class Registro(models.Model):
	idRegistro = models.AutoField(primary_key=True)
	idTermino = models.ForeignKey(Termino, on_delete=models.CASCADE)
	idMateria = models.ForeignKey(Materia, on_delete=models.CASCADE)

class Usuario(models.Model):
	idUsuario =  models.AutoField(primary_key=True)
	nombreUsuario = models.CharField(max_length=100)
	apellidoUsuario = models.CharField(max_length=100)
	correoUsuario = models.CharField(max_length=150)

class Descarga(models.Model):
	idDescarga = models.AutoField(primary_key=True)
	idUsuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
	fechaDescarga = models.DateTimeField('date published')