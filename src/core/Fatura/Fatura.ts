import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FaturaService {
    

    constructor(private http: HttpClient) {
        this.http
    }
    SelecionarFatura(id_docd:number): Observable<any> {
        return this.http.get<any>("https://apitenant.facilitasoft.mmlisolucoes.com/kinasboy/api/print_docs?id_docs="+id_docd);
    }
}