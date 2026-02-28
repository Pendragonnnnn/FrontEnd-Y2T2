
export function Card({prop: {name, image:{src}}}){
    return (
        <li className="cards-item">
            <button>
                <img src={src}/>
                <h3>{name}</h3>
            </button>
        </li>
    )
}