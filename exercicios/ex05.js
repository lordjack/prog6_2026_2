let carro = {
  cor: "Branco",
  modelo: "UP",
  potencia: "1.0 Turbo",
  motoritas:['Chaves',"Seu Madruga"],
  potenciaCombustivel:{gasolina:"130cv",alcool:"135cv" }
};

carro.portas = 4;

console.log(
  carro.cor + " - " + carro.modelo 
  + " - " + carro.potencia + " - " + carro.portas,
  carro.motoritas[0] + " - "+ carro.motoritas[1] 
  + carro.potenciaCombustivel.gasolina+ " - "+
  + carro.potenciaCombustivel.alcool
);
