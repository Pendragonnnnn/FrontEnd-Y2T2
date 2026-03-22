

function Entity( {entityName, healthPercentage} ){
    return (
        <section className="container">
            <h2>{entityName}</h2>
            <div className="healthbar">
            <div style={{width: `${healthPercentage}%`}} className="healthbar__value"></div>
      </div>
        </section>
    );
}

export default Entity;
