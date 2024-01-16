import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile'
function App() {
  return (
    <div className="app-wrapper"> 
     <Header />
     <Navbar />
     <Profile />
    </div>
  );
}




export default App;
