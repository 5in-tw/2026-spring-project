class Simon {
  container;
  #gameOver = false;

  /**
   * Creates a new Simon game.
   *
   * @param {string} id
   *   The id of the HTML element where the game should be inserted.
   */
  constructor(id) {
    this.container = document.getElementById(id);

    if (this.container) {
      console.log(`Found element with id "${id}".`);
    } else {
      throw Error(`Could not find element with id "${id}".`);
    }

    // Add a stylesheet.
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://5in-tw.github.io/2026-spring-project/styles/simon.css';
    // link.href = '/styles/simon.css';
    document.body.appendChild(link);

    // Add game over message.
    const gameOverMessage = document.createElement('span');
    gameOverMessage.id = 'game-over';
    const text = document.createElement('span');
    text.textContent = 'GAME OVER!';
    gameOverMessage.appendChild(text);
    this.container.appendChild(gameOverMessage);
  }

  get gameOver() {
    return this.#gameOver;
  }

  set gameOver(isGameOver) {
    this.#gameOver = !!isGameOver;
    if (this.#gameOver) {
      this.container.classList.add('game-over');
    } else {
      this.container.classList.remove('game-over');
    }
  }

  playSequence(sequence) {
    animateSequence(sequence);
  }

  /**
   * Add buttons.
   *
   * @param {string[]} buttonList A list of button IDs.
   */
  addButtons(buttonList) {
    const labels = {
      yellow: 'Yellow',
      blue: 'Blue',
      red: 'Red',
      green: 'Green',
    };

    for (let i = 0; i < buttonList.length; i++) {
      const id = buttonList[i];

      // Create button
      const button = document.createElement('button');
      button.id = id;
      button.textContent = labels[id];
      this.container.appendChild(button);

      // Add click animation
      button.addEventListener('click', async () => {
        button.classList.add('active');
        await wait(300);
        button.classList.remove('active');
      });
    }
  }
}

function wait(ms, param) {
  return new Promise((resolve) => setTimeout(resolve, ms, param));
}

async function animateSequence(sequence) {
  console.log('Playing sequence', sequence);
  await wait(1250);
  for (let i = 0; i < sequence.length; i++) {
    const button = document.getElementById(sequence[i]);
    button.classList.add('active');
    await wait(300);
    button.classList.remove('active');
    await wait(450);
  }
}

export { Simon };
