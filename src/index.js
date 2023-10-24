import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import "./index.css"


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

