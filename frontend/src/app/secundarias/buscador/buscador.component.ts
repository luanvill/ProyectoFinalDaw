import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
 
  constructor() { 
   
  }

  ngOnInit() {
   
  }
  loadBooks() {
   let busca= $("#txtBuscador").val().toString().split(" ")
   let bandera=false;
   console.log(busca)
   let tbody=document.getElementsByTagName("tbody")[0]
  tbody.innerHTML="";
     fetch('https://api.myjson.com/bins/11k778')
    .then( respuesta => respuesta.json())
    .then( data => {
      let arreglo = data.codigos;
      for (let objeto of arreglo) {
        let codigo= objeto["codigo"]
        let recurso= objeto["recurso"]
        let cont=1
        
        for(let archivo of recurso){
          let titulo= archivo["titulo"]
          let arrTitulo= titulo.split(" ")
          let termino = archivo["termino"]
          let url=archivo["url"]
          for (let pal of busca){
            
            
            if ( arrTitulo.some(x => x === pal)){
                bandera=true;
                console.log("truye")
            }

          }
          if (bandera && cont){
          let tr = document.createElement("tr")
          let th = document.createElement("th")
          let tdNom= document.createElement("td")
          let tdDes= document.createElement("td")
          let a= document.createElement("a")
          let img= document.createElement("img")
          img.setAttribute("src","https://i.ibb.co/tCzrNfr/descarga.png")
          a.setAttribute("href",url)
          a.appendChild(img)
          tdDes.appendChild(a)
          tdNom.setAttribute("class","text-left")
          tdNom.appendChild(document.createTextNode(titulo))
          th.setAttribute("scope","row")
          th.appendChild(document.createTextNode(cont.toString()))
          tr.appendChild(th)
          tr.appendChild(tdNom)
          tr.appendChild(tdDes)
          tbody.appendChild(tr)
          cont++
          }
          bandera=false;
          
          
        }
        

        

        
      }
    })
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
    
  }

  

}