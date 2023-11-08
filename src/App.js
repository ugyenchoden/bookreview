import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Promotion from './components/Promotion';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';

const Logo = () => {
  const url = <img src={logo}></img>
  return url;
}

function App() {
  return(
    <>
    <Logo />
    <Nav />
    <Promotion />
    <Intro1 name="Ugyen"/>
    <Intro2 />
    <Intro3 />
    <Footer />
    </>
  );
};

export default App;
