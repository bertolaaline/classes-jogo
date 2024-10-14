class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque indefinido"; // Caso o tipo não seja nenhum dos acima
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando heróis de diferentes tipos
  const heroi1 = new Heroi("Merlin", 150, "mago");
  const heroi2 = new Heroi("Conan", 30, "guerreiro");
  const heroi3 = new Heroi("Bruce Lee", 30, "monge");
  
  // Heróis atacando
  heroi1.atacar(); // Saída: "O mago atacou usando usou magia"
  heroi2.atacar(); // Saída: "O guerreiro atacou usando usou espada"
  heroi3.atacar(); // Saída: "O monge atacou usando usou artes marciais"