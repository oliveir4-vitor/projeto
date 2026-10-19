import type { Cliente } from './types.js';

const clientes: Cliente[] = [
    {nome: 'João', idade: 30}
];

function cadastrarCliente(cliente : Cliente): void{
    clientes.push(cliente);
}

function listarClientes(): Cliente[] {
    return clientes;
}

export { 
    cadastrarCliente,
    listarClientes 
}