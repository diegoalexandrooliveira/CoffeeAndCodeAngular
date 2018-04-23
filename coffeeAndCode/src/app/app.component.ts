import { Component } from "@angular/core";
import { DadosService } from "./dados.service";
import { Dados } from "./dados";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public titulo: string;
  public dados;

  constructor(private service: DadosService) {
    this.titulo = "Coffee and Code Agro!";

    this.service
      .getDados()
      .then((dados: Dados[]) => {
        this.dados = dados;
      })
      .catch(erro => {
        console.log(erro);
      });
  }
}
