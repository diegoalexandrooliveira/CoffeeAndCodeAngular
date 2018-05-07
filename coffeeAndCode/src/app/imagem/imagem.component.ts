import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-imagem",
  templateUrl: "./imagem.component.html",
  styleUrls: ["./imagem.component.css"]
})
export class ImagemComponent implements OnInit {
  @Input() descricao: string;
  @Input() url: string;

  constructor() {}

  ngOnInit() {}
}
