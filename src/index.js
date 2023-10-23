import ReactDOM from 'react-dom/client';
import logoReact from './logoReact.png';
import "./index.css"

function Header() {
  return (
   <header>
    <nav className="nav">
      <img src={logoReact} width={60} />

      <ul className="nav-items">
        <li>
          1
        </li>
        <li>
          2
        </li>
        <li>
          3
        </li>
      </ul>
    </nav>
   </header>
  )
}

function Content() {
  return (
    <div>
      <h1>
        This is first page
      </h1>
      <ul>
        <li>
          4
        </li>
        <li>
          5
        </li>
        <li>
          6
        </li>
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer>
    <small>
      Don't forget to smile :)
    </small>
    </footer>
  )
}

function Page() {
  return (
    <div>
    <Header/>
    <Content/>
    <Footer/>
    </div>


  )
}

// const page = Page()
// console.log(page)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page/>);

