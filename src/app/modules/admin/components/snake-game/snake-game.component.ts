import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'portfolio-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss']
})
export class SnakeGameComponent {
  score = '000';
  showIntructions = true;
  gridSize = 20;
  snake = [{ x: 10, y: 10 }];
  food = this.generateFood();
  highScore = 0;
  direction = 'right';
  gameInterval;
  gameSpeedDelay = 200;
  gameStarted = false;
  highScoreText: string;
  @ViewChild('board') board!: ElementRef;

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    this.handleKeyPress(event)
  }

  constructor(private renderer: Renderer2) { }

  handleKeyPress(event) {
    if (
      (!this.gameStarted && event.code === 'Space') ||
      (!this.gameStarted && event.key === ' ')
    ) {
      this.startGame();
    } else {
      switch (event.key) {
        case 'ArrowUp':
          this.direction = 'up';
          break;
        case 'ArrowDown':
          this.direction = 'down';
          break;
        case 'ArrowLeft':
          this.direction = 'left';
          break;
        case 'ArrowRight':
          this.direction = 'right';
          break;
      }
    }
  }

  startGame() {
    this.gameStarted = true; // Keep track of a running game
    this.showIntructions = false;
    this.gameInterval = setInterval(() => {
      this.move();
      this.checkCollision();
      this.draw();
    }, this.gameSpeedDelay);
  }

  draw() {
    const board = this.board.nativeElement;
    board.innerHTML = '';
    this.drawSnake();
    this.drawFood();
    this.updateScore();
  }

  private generateFood() {
    const x = Math.floor(Math.random() * this.gridSize) + 1;
    const y = Math.floor(Math.random() * this.gridSize) + 1;
    return { x, y };
  }

  drawFood() {
    const board = this.board.nativeElement;

    if (this.gameStarted) {
      const foodElement = this.createGameElement('div', 'food');
      this.setPosition(foodElement, this.food);
      board.appendChild(foodElement);
    }
  }

  drawSnake() {
    const board = this.board.nativeElement;

    this.snake.forEach((segment) => {
      const snakeElement = this.createGameElement('div', 'snake');
      this.setPosition(snakeElement, segment);
      board.appendChild(snakeElement);
    });
  }

  createGameElement(tag, className) {
    const element = this.renderer.createElement(tag);
    element.className = className;
    return element;
  }

  setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
  }


  move() {
    const head = { ...this.snake[0] };
    switch (this.direction) {
      case 'up':
        head.y--;
        break;
      case 'down':
        head.y++;
        break;
      case 'left':
        head.x--;
        break;
      case 'right':
        head.x++;
        break;
    }

    this.snake.unshift(head);

    //   snake.pop();

    if (head.x === this.food.x && head.y === this.food.y) {
      this.food = this.generateFood();
      this.increaseSpeed();
      clearInterval(this.gameInterval); // Clear past interval
      this.gameInterval = setInterval(() => {
        this.move();
        this.checkCollision();
        this.draw();
      }, this.gameSpeedDelay);
    } else {
      this.snake.pop();
    }
  }

  stopGame() {
    clearInterval(this.gameInterval);
    this.gameStarted = false;
    this.showIntructions = true;
  }

  increaseSpeed() {
    if (this.gameSpeedDelay > 150) {
      this.gameSpeedDelay -= 5;
    } else if (this.gameSpeedDelay > 100) {
      this.gameSpeedDelay -= 3;
    } else if (this.gameSpeedDelay > 50) {
      this.gameSpeedDelay -= 2;
    } else if (this.gameSpeedDelay > 25) {
      this.gameSpeedDelay -= 1;
    }
  }

  checkCollision() {
    const head = this.snake[0];

    if (head.x < 1 || head.x > this.gridSize || head.y < 1 || head.y > this.gridSize) {
      this.resetGame();
    }

    for (let i = 1; i < this.snake.length; i++) {
      if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
        this.resetGame();
      }
    }
  }

  resetGame() {
    this.updateHighScore();
    this.stopGame();
    this.snake = [{ x: 10, y: 10 }];
    this.food = this.generateFood();
    this.direction = 'right';
    this.gameSpeedDelay = 200;
    this.updateScore();
  }

  updateScore() {
    const currentScore = this.snake.length - 1;
    this.score = currentScore.toString().padStart(3, '0');
  }

  updateHighScore() {
    const currentScore = this.snake.length - 1;
    if (currentScore > this.highScore) {
      this.highScore = currentScore;
      this.highScoreText = this.highScore.toString().padStart(3, '0');
    }
  }


}
