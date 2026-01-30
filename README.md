# TypeScriptTutorial

## $ npm install -g typescript 

tipagem dinamica - o TypeScript permite que variaveis mudem de tipo
> let minhaVariavel: any = 10;    // inicialmente é um número


tipagem estatica - o TypeScript não permite que variaveis mudem de tipo

> let minhaOutraVariavel: number = 20;  // inicialmente é um número

// minhaOutraVariavel = "texto"; // Isso causaria um erro de compilação

// o compilador do typescript se chama tsc (TypeScript Compiler)
//  e é usado para converter código TypeScript em JavaScrip

// para compilar um arquivo TypeScript, você pode usar o comando:
// tsc nomeDoArquivo.ts 


import uuid from 'uuid';

const generateUser = () =>{
    return {id: uuid}; ;
}

console.log("Res:"+ generateUser());


no typescript posso usar import e export ... 