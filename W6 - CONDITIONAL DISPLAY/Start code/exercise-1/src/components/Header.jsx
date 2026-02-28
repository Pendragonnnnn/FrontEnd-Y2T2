import pnLogo from "../assets/pn-logo.png";

function Header( {batchName} ){
    return(
        <div id="header">
            <img src={pnLogo} alt="PN Logo" />
            <h1>Students results for {batchName}</h1>
        </div>
    
    );
}

export default Header;
