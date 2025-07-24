import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFormulario } from "./Fatura/formulario";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppFormulario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'emprego';
}
