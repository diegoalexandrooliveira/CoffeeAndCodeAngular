import { Component } from "@angular/core";
import { ImagemService } from "./imagem.service";
import { Imagem } from "./imagem";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public titulo: string;
  public imagens: Imagem[];
  public imagensFiltradas: Imagem[] = [];
  public filtro: string;

  constructor(private service: ImagemService) {
    this.titulo = "Coffee and Code Agro!";

    this.service
      .getImagens()
      .then((imagens: Imagem[]) => {
        this.imagens = imagens;
        this.imagensFiltradas = this.imagensFiltradas.concat(imagens);
      })
      .catch(erro => {
        console.log(erro);
      });
  }

  public pesquisar() {
    this.imagensFiltradas = this.imagens.filter(imagem => {
      if (this.filtro) {
        return imagem.$descricao.toLowerCase().includes(this.filtro);
      } else {
        return true;
      }
    });
  }
}
