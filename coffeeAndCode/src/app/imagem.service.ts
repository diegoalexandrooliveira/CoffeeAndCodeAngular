import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Response } from "@angular/http";
import { Imagem } from "./imagem";
import "rxjs/add/operator/map";

@Injectable()
export class ImagemService {
  private url: string;
  constructor(private http: Http) {
    this.url = "http://localhost:8080/api/imagens";
  }

  public getImagens(): Promise<Imagem[]> {
    return this.http
      .get(this.url)
      .map((response: Response) => {
        if (response.status != 200) {
          throw new Error("Erro ao executar o get.");
        }
        return response
          .json()
          .map(imagem => new Imagem(imagem.descricao, imagem.url));
      })
      .toPromise();
  }
}
