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

  public getImagens() {
    return this.http.get(this.url).map((response: Response) => {
      let json = response.json();
      let imagens: Imagem[] = json.map(
        item => new Imagem(item.descricao, item.url)
      );
      return imagens;
    });
  }
}
