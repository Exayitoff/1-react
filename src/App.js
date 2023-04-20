import './App.css';
import Topnav from './components/Topnav';

import Footer from './components/footer';
import { Routes , Route } from 'react-router-dom';
import Mains from './components/mains';
import Maktabhaq from './components/layouts/Maktabhaq';
import Errorpage from './components/Errorpage';
import Oqituvchipage from './components/layouts/oqituvchilarpage';
import Yangiliklar from './components/layouts/yangiliklar';
import Oquvchilar from './components/layouts/oquvchilar';
import Maktabhayoti from './components/layouts/maktabhayoti';
import Maktabdirektor from './components/layouts/direktor';
import Anonim from './components/layouts/anonim';

function App() {
  return (
    <div className="App" variant="dark">
      <Topnav/>
      {/* <Maktabhaq/> */}
      <Routes>
        <Route path='/' element={ <Mains/> }/>
        <Route path='/maktabhaqida' element={ <Maktabhaq/> } />
        <Route path='/oqituvchilar' element={ <Oqituvchipage/> } />
        <Route path='/yangiliklar' element={ <Yangiliklar/> } />
        <Route path='/oquvchilar' element={ <Oquvchilar/> } />
        <Route path='/maktabhayoti' element={ <Maktabhayoti/> } />
        <Route path='/direktor' element={ <Maktabdirektor/> } />
        <Route path='/anonim' element={ <Anonim/> } />
        <Route path='*' element={ <Errorpage/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}
 
export default App;
