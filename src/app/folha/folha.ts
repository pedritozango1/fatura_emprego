import { Component, inject, input, signal } from '@angular/core';
import { FaturaService } from '../../core/Fatura/Fatura';

@Component({
    selector: 'app-folha',
    templateUrl: './folha.html',
    styleUrl: './folha.css'
})
export class AppFolha {
    faturaService = inject(FaturaService)
    farura = signal<any>(null);
    IdDocs = input<number>(1);
    ngOnInit(): void {
        this.impirmir();
    }
    impirmir() {
        this.faturaService.SelecionarFatura(this.IdDocs()).subscribe(resp => {
            this.farura.set(resp);
            console.log(this.farura());
        });
    }
    calcularDesconto(): number {
        let totalDiscount: number = 0;
        const fatura = this.farura();
        if (fatura && fatura.dados && Array.isArray(fatura.dados.itens)) {
            fatura.dados.itens.forEach((item:any) => {
                totalDiscount += item.discount || 0; 
            });
        }
        return totalDiscount;
    }


}
