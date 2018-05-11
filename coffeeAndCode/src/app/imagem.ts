export class Imagem {
  private _descricao: string;
  private _url: string;

  constructor(descricao?: string, url?: string) {
    this._descricao = descricao;
    this._url = url;
  }

  public get descricao() {
    return this._descricao;
  }
  public set descricao(descricao: string) {
    this._descricao = descricao;
  }

  public get url() {
    return this._url;
  }
  public set url(url: string) {
    this._url = url;
  }
}
