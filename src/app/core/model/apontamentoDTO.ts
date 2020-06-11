export class ApontamentoDTO {

    id?: string;
    tipoApontamento: string; // Despesa ou Credito
    mesApontamento: string; // Mês do apontamento
    descricao: string; // Descrição - EX.: Restaurante, padaria, salario, cerveja...
    diaApontamento: number; // O dia mês
    valor: string; // Valor
    formaPagamento: string; // Forma de pagamento - Cartão Debito/credito, dinheiro
    // excluido: boolean; //Se excluido = true
    // dataApontamento: {type:Date} //Data do pontamento
    numeroMes: number; // numero do mes do apontamento
}
