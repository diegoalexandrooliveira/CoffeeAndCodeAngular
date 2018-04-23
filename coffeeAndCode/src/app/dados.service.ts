import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Response } from "@angular/http";
import { Dados } from "./dados";
import "rxjs/add/operator/map";

@Injectable()
export class DadosService {
  private url: string;
  constructor(private http: Http) {
    this.url = "http://localhost:8080/api/dados";
  }

  public getDados(): Promise<Dados[]> {
    return this.http
      .get(this.url)
      .map((response: Response) => {
        if (response.status != 200) {
          throw new Error("Erro ao executar o get.");
        }
        return response.json().map(dado => new Dados(dado.imagem, dado.url));
      })
      .toPromise();
  }
}
