import logo from './logo.svg';
import './App.css';
import Topnav from './components/Topnav';
import IndividualIntervalsExample from './components/Slayder';
import Maktabhaqida from './components/maktabhaqida';
import Qisqabox from './components/qisqabox';
import Tadbirlar from './components/tadbirlar';
import Toyifalar from './components/toyifalar';
import Footer from './components/footer';


function App() {
  return (
    <div className="App" variant="dark">
      <Topnav/>

      <IndividualIntervalsExample/>
      <Maktabhaqida/>
      <Qisqabox/>
      <Tadbirlar/>
      <Toyifalar/>
      <Footer/>
    </div>
  );
}
 
export default App;
