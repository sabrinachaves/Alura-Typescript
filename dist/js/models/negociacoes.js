export class Negociacoes {
    constructor() {
        this.negociacoes = []; //Array<Negociacao>
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        //ReadonlyArray<Negociacao>
        return this.negociacoes;
    }
}
