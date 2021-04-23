import './NavBar.css';

function NavBar() {

    return (
        <div className="navbar displayFlexNav">
            <img alt="" className="iconNav"
                src="/images/logorainbowsix.png"/>
            <div className="divANavbar">
                <a href="http://localhost:3000/">HOME</a>
                <a href="http://localhost:3000/operadores">OPERADORES</a>
                <a href="http://localhost:3000/proplayers">PRO PLAYERS</a>
            </div>
        </div>
    );
}

export default NavBar;