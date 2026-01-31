

type Carro = {
	modelo?: string;
	ano: number; 
}

let car: Carro;

car = {
	ano: 2012,
	modelo: "kia",
}

console.log(car.modelo?.toUpperCase());


function teste(mensagem: string){
	console.log(mensagem)
}

function teste2(mensagem: string): string{
	return mensagem;
}

teste("ola mundo")

console.log(teste2("ola mundo 2"));
console.log(teste2("ola mundo 2").toUpperCase());

// inferencia de tipo permite o ts ler uma funcao e saber o seu tipo de retorno, so funciona para tipos primitivos

function getCarro(): Carro{
		return {
			modelo:"hyundai",
			ano: 2026
		}
}

console.log(getCarro())

function toJSON(objeto: any){
		return JSON.stringify(objeto);
}

console.log(toJSON(car));


// funcoes Generic no caso tipo T

function fromJSON<T>(json: string){
	return JSON.parse(json) as T;
}

const novoCarJson = `{"ano":2050,"modelo":"kia Future"}`;

console.log(fromJSON<Carro>(novoCarJson))

console.log(fromJSON<Carro>(novoCarJson).ano)
