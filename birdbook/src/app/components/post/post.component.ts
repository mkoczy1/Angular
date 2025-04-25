import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {          /* Variablen deklarieren, um Elemente einfach abzuändern */
  @Input() img: string ='';               /* Informationen von außen eingeben -> @Input() */
  @Input() name: string ='';              /* Input Befehl muss aus Angular-Bibliothek inportiert werden -> Strg + Leertaste */
  @Input() time: string ='';
  @Input() text: string ='';
}
