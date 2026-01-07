import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {Carrusel} from './components/carrusel/carrusel';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer ,Carrusel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('unitedstore');
}
