import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
   
    
  }

  ngOnInit() {
    this.iniciarlizarRecursos()
  }
  iniciarlizarRecursos(){
    let materia = this.route.snapshot.paramMap.get('id');  
    let tag = this.route.snapshot.paramMap.get('id2');
    let materiah2= document.getElementsByClassName("text-black mt-0")[0]
    materiah2.appendChild(document.createTextNode(materia))
    fetch('https://api.myjson.com/bins/11k778')
    .then( respuesta => respuesta.json())
    .then( data => {
      let arreglo = data.codigos;
      for (let objeto of arreglo) {
        let codigo= objeto["codigo"]
        let recurso= objeto["recurso"]
        if(codigo==tag){
          let cont=1
          let tbody=document.getElementsByTagName("tbody")[0]
          for(let archivo of recurso){
            let titulo= archivo["titulo"]
            let termino = archivo["termino"]
            let url=archivo["url"]
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

        }

        
      }
    })
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
  }
}