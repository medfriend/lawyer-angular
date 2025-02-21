import {Component, OnInit} from "@angular/core";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {BasicButtonComponent} from "../../components/buttons/basic-button/basic-button.component";
import {Router} from "@angular/router";
gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'tutela',
    templateUrl: './tutela.component.html',
    styleUrls: ['./tutela.component.scss'],
    imports: [
        BasicButtonComponent
    ],
    standalone: true
})
export default class TutelaComponent implements OnInit {

    constructor(
        private router: Router
    ) {
        gsap.registerPlugin(ScrollTrigger);
    }

    ngOnInit(): void {
        const sectionsIds = ["#section1", "#section2", "#section3", "#section4"];

        sectionsIds.forEach(sectionId => {
            // Asegura que cada sección tenga su propio ScrollTrigger con configuraciones independientes
            gsap.fromTo(sectionId, { opacity: 0 }, {
                scrollTrigger: {
                    trigger: sectionId,
                    start: "center bottom", // Inicia la animación cuando la parte superior de la sección llega a la parte inferior del viewport
                    end: "bottom center", // Termina cuando la parte inferior de la sección pasa la parte superior del viewport
                    scrub: true,
                },
                opacity: 1, // Anima la opacidad de 0 a 1
                duration: 1, // Duración de la animación
            });
        });
    }

    routerCrearTutela(){
        this.router.navigate(['/home/tutela/crear']);
    }


}