import logo_React from '../images/logoReact.png';

export default function Header() {
    return (
     <header>
      <nav className="nav">
        <img className="logo" alt='logo' src={logo_React}/>
  
        <ul className="nav-items">
          <li> 1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
     </header>
    )
  }
