import './NavBar.css';

function NavBar() {

    return (
        <div className="navbar displayFlexNav">
            <img alt="" className="iconNav"
                src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/DAwqy5hMljnxm7evA5ASN/c902c02d624b1cd2712a8cda5e891928/r6s-y6-logo.png"/>
            <div className="divANavbar">
                <a href="http://localhost:3000/">HOME</a>
                <a href="http://localhost:3000/operadores">OPERADORES</a>
                <a href="http://localhost:3000/proplayers">PRO PLAYERS</a>
            </div>
        </div>
    );
}

export default NavBar;