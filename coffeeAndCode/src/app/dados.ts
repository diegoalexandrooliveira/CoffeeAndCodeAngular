export class Dados {
  private imagem: string;
  private url: string;

  constructor(imagem?: string, url?: string) {
    this.imagem = imagem;
    this.url = url;
  }

  public get $imagem() {
    return this.imagem;
  }
  public set $imagem(imagem: string) {
    this.imagem = imagem;
  }

  public get $url() {
    return this.url;
  }
  public set $url(url: string) {
    this.url = url;
  }
}
