/**
 * Personaje principal del juego. Hereda de la clase Character.
 * @extends Character
 */
class Player extends Character {
    /**
     * Inicializa un jugador
     * @param game {Game} La instancia del juego al que pertenece el jugador
     */
    constructor (game) {
        const height = PLAYER_HEIGHT * game.width / 100,
            width = PLAYER_WIDTH * game.width / 100,
            x = game.width / 2 - width / 2,
            y = game.height - height,
            speed = PLAYER_SPEED,
            myImage = PLAYER_PICTURE,
            myImageDead = PLAYER_PICTURE_DEAD;

        super(game, width, height, x, y, speed, myImage, myImageDead);
    }

    /**
     * Actualiza los atributos de posición del jugador y los disparos en función de las teclas pulsadas
     */
    update () {
        if (!this.dead) {
            switch (this.game.keyPressed) {
            case KEY_LEFT:
                if (this.x > this.speed) {
                    this.x -= this.speed;
                }
                break;
            case KEY_RIGHT:
                if (this.x < this.game.width - this.width - this.speed) {
                    this.x += this.speed;
                }
                break;
            case KEY_SHOOT:
                this.game.shoot(this);
                break;
            }
        }
    }

    /**
     * Mata al jugador
     */

collide(entity) {
    if (entity instanceof Shot && !this.dead) {
      this.lives -= 1; // Reducir vidas
      this.game.updateLives(); // Actualizar las vidas en pantalla
      if (this.lives > 0) {
        this.dieTemporarily(); // Morir temporalmente y revivir
      } else {
        this.die(); // Morir definitivamente
        this.game.endGame(); // Finalizar el juego
      }
    }
  }

  dieTemporarily() {
    this.dead = true;
    this.image.src = this.deadImage; // Cambiar la imagen del jugador
    setTimeout(() => {
      this.image.src = this.myImage; // Restaurar la imagen original
      this.dead = false; // Revivir
    }, 2000); // Morir por 2 segundos
  }
}