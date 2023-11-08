import './App.css';
import Nav from './components/Nav';
import Promotion from './components/Promotion';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';
import HeaderLogo from './components/HeaderLogo';

function App() {
  return(
    <div className="App">
    <HeaderLogo />
    <Nav />
    <Promotion />
    <Intro1 name="Ugyen"/>
    <Intro2 />
    <Intro3 />
    <Footer />
    </div>
  );
};

export default App;
