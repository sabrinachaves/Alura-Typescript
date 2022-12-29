export abstract class View<T> { //abstract: a classe não pode ser instanciada
  protected elemento: HTMLElement; //protected: só as próprias classes ou as filhas podem acessar os métodos

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  public update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string; //abstract: responsabilidade das classes filhas
}
