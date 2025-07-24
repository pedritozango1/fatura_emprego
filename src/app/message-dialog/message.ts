import { Component, input, output } from '@angular/core';
import { AppFolha } from "../folha/folha";

@Component({
  selector: 'app-message',
  templateUrl: './message.html',
  styleUrl: './message.css',
  imports: [AppFolha]
})
export class AppMessage {
    tipofatura=input<string>();
    onIsMessage=output<boolean>();
     IdDocs=input<number>(1);

    fecharMoal(){
        this.onIsMessage.emit(false);
    }
}