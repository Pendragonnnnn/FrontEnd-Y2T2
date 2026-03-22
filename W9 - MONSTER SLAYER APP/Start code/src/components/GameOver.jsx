

function GameOver( {title, restartGame} ){
    return (
        <section className="container">
            <h2>Game Over!</h2>
            <h2>{title}</h2>
            <button onClick={restartGame}>Start New Game</button>
        </section>
    )
}

export default GameOver;