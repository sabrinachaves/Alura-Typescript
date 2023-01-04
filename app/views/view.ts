export abstract class View<T> { //abstract: a classe não pode ser instanciada
  protected elemento: HTMLElement; //protected: só as próprias classes ou as filhas podem acessar os métodos
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);
    if(elemento){
      this.elemento = elemento as HTMLInputElement;
    }else{
      throw Error(`Seletor ${seletor} não existe no DOM. Verifique!`);
    }
    if (escapar){
      this.escapar = escapar;
    }
  }

  public update(model: T): void {
    let template = this.template(model);
    if(this.escapar){
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string; //abstract: responsabilidade das classes filhas
}
