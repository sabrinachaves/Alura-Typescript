import { Negociacao } from "./negociacao";

export class Negociacoes {
  private negociacoes: Negociacao[] = []; //Array<Negociacao>

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    //ReadonlyArray<Negociacao>
    return this.negociacoes;
  }
}
