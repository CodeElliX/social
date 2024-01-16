import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile'
import Dialoges from './components/Dialoges/Dialoges';
function App() {
  return (
    <div className='app-wrapper'> 
     <Header />
     <Navbar />
     <div className='app-wrapper-content'>
       <Dialoges />
     </div>
     {/* <Profile /> */}
    </div>
  );
}




export default App;
