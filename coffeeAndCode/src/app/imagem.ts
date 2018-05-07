export class Imagem {
  private descricao: string;
  private url: string;

  constructor(descricao?: string, url?: string) {
    this.descricao = descricao;
    this.url = url;
  }

  public get $descricao() {
    return this.descricao;
  }
  public set $descricao(descricao: string) {
    this.descricao = descricao;
  }

  public get $url() {
    return this.url;
  }
  public set $url(url: string) {
    this.url = url;
  }
}
