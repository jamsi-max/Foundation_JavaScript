Для вывода счёта и сообщения о победе правки тут

let renderer = {
    cells: {},

>    currentScore(currentStarus=true) {
        if (currentStarus) {
            document.getElementById('score').innerHTML = `${snake.body.length - 1}:${settings.winLength}`;
            if ((snake.body.length - 1) == settings.winLength) {
                score.innerHTML = 'You WIN!!!';
            }
        } else {
            score.innerHTML = 'You luss!!!';
        }
    },

    ...

    render(snakePointArray, foodPoint) {
>       this.currentScore();
        ...
    }
};

let game = {
	...

    tickHandler() {
        if (!this.canSnakeMakeStep()) {
>           renderer.currentScore(false);
            this.finish();
            return;
        }