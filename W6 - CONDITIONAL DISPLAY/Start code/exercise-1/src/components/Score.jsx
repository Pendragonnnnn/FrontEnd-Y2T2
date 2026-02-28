import Statistic from "./Statistic";

function Score( {courseResult, courseName} ){
    return(
      <>
      <h1>{courseName}</h1>
      <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
            {courseResult.map((element, index) => (
              <tr key = {index}>
                <td>{element.firstName} </td>
                <td>{element.lastName} </td>
                <Below50 score={element.score}/>
              </tr>
            ))}

            
            </tbody>
            <tfoot>
              <Statistic courseResult={courseResult}/>
            </tfoot>
          </table>      
         </>
    );
}
function Below50({score}){
  return(
    <td className={score<50 ? "warning" : ""}>
      {score}
    </td>
  )
}

export default Score



