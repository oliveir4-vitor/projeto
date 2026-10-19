import PromptSync = require("prompt-sync");
import { cadastrarCliente, listarClientes} from './clientes.js';
import type { Cliente } from './types.js';


const prompt = PromptSync({sigint: true});

const nomeInput: string = prompt(`Digite o nome do cliente: `);
const idadeInput: number = Number(prompt(`Digite a idade do cliente: `));

const novoCliente: Cliente = {
    nome: nomeInput,
    idade: idadeInput,
}

cadastrarCliente(novoCliente);
console.log(listarClientes());