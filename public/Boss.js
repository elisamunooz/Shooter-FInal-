class Boss extends Opponent {
    constructor(x, y, game) {
      super(x, y, game);
      this.speed *= 2; // Doble velocidad que el triángulo
      this.image.src = "assets/jefe.png"; // Imagen del jefe
      this.deadImage = "assets/jefe_muerto.png"; // Imagen cuando muere
    }
  }
  