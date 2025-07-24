import { Component, signal } from '@angular/core';
import { AppMessage } from "../message-dialog/message";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
  imports: [AppMessage]
})
export class AppFormulario {
  isMessage = signal<boolean>(false);
  tipoFatura = signal<string>("");
  idTipofatura=signal<number>(1)
  FaturaRecibo() {
    this.idTipofatura.set(1);
    this.isMessage.set(true);
    this.tipoFatura.set("Factura-Recibo");
  }

  FaturaProforma() {
     this.idTipofatura.set(1);
    this.isMessage.set(true);
    this.tipoFatura.set("Proforma");
  }

  FaturaNormal() {
    this.idTipofatura.set(1);
    this.isMessage.set(true);
    this.tipoFatura.set("Factura");
  }

  Recibo() {
     this.idTipofatura.set(1);
    this.isMessage.set(true);
    this.tipoFatura.set("Recibo");
  }

  NotaCredito() {
     this.idTipofatura.set(1);
    this.isMessage.set(true);
    this.tipoFatura.set("Nota de Crédito");
  }

  NotaDebito() {
     this.idTipofatura.set(1);
    this.isMessage.set(true);
    this.tipoFatura.set("Nota de Débito");
  }

}
