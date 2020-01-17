import { Component, OnInit } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  faFacebookF = faFacebookF;
  faInstagram=faInstagram;
  
  constructor() { 
   this.iniciarlizarCarrera()
   this.inicializarMaterias()
  }
  
  ngOnInit() {
   
  }

  iniciarlizarCarrera(){
     fetch('https://medipol-b1d72.firebaseio.com/clientes.json')
    .then( respuesta => respuesta.json())
    .then( data => {
      let arreglo = data.clientes;
      for (let objeto of arreglo) {
        let contacto= objeto["contacto"]
        let edad= objeto["edad"]
        let nombre= objeto["nombre"]
        let sangre= objeto["sangre"]
        console.log(contacto+" "+edad+" "+nombre+" "+sangre)
        
      }
    })
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
  }

  inicializarMaterias(){

    //https://api.myjson.com/bins/kojfg
    fetch('https://api.myjson.com/bins/kojfg')
    .then( respuesta => respuesta.json())
    .then( data => {
      let arreglo = data.Carreras;
      let cont=0
      let divMaster= document.getElementById("main")
      for (let objeto of arreglo) {
        let carrera= objeto["carrera"]
        let codigo= objeto["codigo"]
        let materias= objeto["materias"]

        let section=document.createElement("section")
        let divCon=document.createElement("div")
        let divCol12=document.createElement("div")
        let divRow=document.createElement("div")
        let divRow2=document.createElement("div")
        let divCol122=document.createElement("div")
        if(cont%2==0){
          section.setAttribute("class","page-section bg-primary")
        }else{
          
          section.setAttribute("class","page-section")
        }
        
        divRow.setAttribute("class","row justify-content-center")

        divCon.setAttribute("class","container")

        divRow2.setAttribute("class","row justify-content-center")

        divCol12.setAttribute("class","col-lg-12 text-center")
        divCol12.setAttribute("id",codigo)
        let h2 =document.createElement("h2")
        let txth2 = document.createTextNode(carrera)
        
        h2.appendChild(txth2)
        h2.setAttribute("class","text-black mt-0")
        let hr =document.createElement("hr")
        hr.setAttribute("class","divider light my-4")
        let p =document.createElement("p")
        
        p.setAttribute("class","text-gray-50 mb-4")
        divRow2.setAttribute("class","row justify-content-center")
        divCol122.setAttribute("class","col-lg-12")
        let ul=document.createElement("ul")
        
        ul.setAttribute("class","row")
        for(let dato of materias){
          let materia = dato["materia"]
          let tag =dato["tag"]
          
          let li=document.createElement("li")
          li.setAttribute("class","navbar-nav ml-auto my-2 col-lg-6")
          let a=document.createElement("a")
          a.setAttribute("class","btn btn-link")
          a.setAttribute("href","/biblioteca/"+materia+"/"+tag)
          let txt = document.createTextNode(materia)
          a.appendChild(txt)
          li.appendChild(a)
          ul.appendChild(li)
          

        }
        
        divCol122.appendChild(ul)
        divRow2.appendChild(divCol122)
        p.appendChild(divRow2)
        divCol12.appendChild(h2)
        divCol12.appendChild(hr)
        divCol12.appendChild(p)
        divRow.appendChild(divCol12)
        divCon.appendChild(divRow)
        section.appendChild(divCon)
        
        divMaster.appendChild(section)
        cont++;
        

      }
    })
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });

  }
}