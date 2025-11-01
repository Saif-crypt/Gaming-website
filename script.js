function openGame(game) {
    let url = '';
    switch (game) {
        case 'pong':
            url = 'pong.html';
            break;
        case 'snake':
            url = 'snake.html';
            break;
        case 'space_invaders':
            url = 'space_invaders.html';
            break;
    }
    window.location.href = url;
}
