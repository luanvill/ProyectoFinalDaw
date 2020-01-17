import { Component, OnInit } from '@angular/core';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import introJs from 'intro.js/intro.js';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  ngOnInit() {
    //Nada adicional que cargar en arranque.
  }
  faSearchengin = faSearchengin;
  navbarOpen = false;
   toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
  }

   ngAfterViewInit(): void {
    this.intro();
  }

  intro() {
    let intro = introJs.introJs();
    intro.setOptions({
      steps: [
        {
          intro: "Bienvenido al Repositorio Virtual"
        },
        {
          element: '#step1',
          intro: "Esta es la pagina de inicio",
          position: 'bottom'
          
        },
        {
          element: '#step2',
          intro: "Aqui encontraras Noticias interesantes",
          position: 'bottom'
        },
        {
          element: '#step3',
          intro: "La propuesta de valor de la pagina web",
          position: 'bottom'
        },
        {
          element: '#step4',
          intro: "No dudes en contactarnos",
          position: 'bottom'
        }
      ]
    });
    intro.start();
  }

}