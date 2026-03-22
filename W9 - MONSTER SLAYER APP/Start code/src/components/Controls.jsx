function Controls( {attack, special, heal, kill ,turn} ){
    return(
        <section id="controls">
            <button onClick={attack}>ATTACK</button>
            <button disabled={turn < 3} onClick={special}>SPECIAL !</button>
            <button onClick={heal}>HEAL</button>
            <button onClick={kill}>KILL YOURSELF</button>
        </section>
    )
}

export default Controls;