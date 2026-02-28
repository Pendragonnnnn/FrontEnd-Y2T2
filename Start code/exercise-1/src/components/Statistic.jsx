
function Statistic({courseResult}){
    let avgScore = courseResult.reduce((acc, element) => acc+element.score,0) / courseResult.length;
    let maxScore = courseResult.reduce((acc, e) => 
    e.score > acc ? e.score : acc ,courseResult[0].score);
    let minScore = courseResult.reduce((acc, e) => 
    e.score < acc ? e.score : acc ,courseResult[0].score);
    return(
        <tr className="statistics">
            <td>Average: <br></br>{avgScore.toFixed(2)}</td>
            <td>Max: <br></br>{maxScore}</td>
            <td>Min: <br></br>{minScore}</td>
        </tr>
        
    )
    

}

export default Statistic;