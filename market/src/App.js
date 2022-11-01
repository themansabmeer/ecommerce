import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import {DataProvider} from './GlobalState'
import Header from './components/Headers/Header'
import MainPage from './components/mainpages/Pages'

<<<<<<< HEAD

function App() {
 
=======
function App() {
>>>>>>> f8728ffce37ba7587379769914a5dfc40c1c629b
  return (
    
    <DataProvider>
      <Router>
<<<<<<< HEAD
       
        <Header/>
        
=======
        <Header/>
>>>>>>> f8728ffce37ba7587379769914a5dfc40c1c629b
        <MainPage/>

      </Router>
    </DataProvider>
    
  );
}

export default App;
