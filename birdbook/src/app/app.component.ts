import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './components/post/post.component';

interface Post {          //interface beschreibt, welche Informationen sich in einer Tabelle/Datenbank befinden
  name:string,
  img:string,
  text:string,
  time:string
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostComponent],           /* Code aus dem angelegten component-Ordner wird importiert, "Klassen können nun mehrere Objekte erzeugen", oben wird import automatisch ergänzt */
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'birdbook';       //wird nicht mehr genutzt
  data:Array<Post> = [];                                /* Daten aus Datenbank in Variable speichern */

  async ngOnInit() {
    this.data = await (await fetch('./assets/data/posts.json')).json();       /* Daten weren in Variable importiert */
  }
}
