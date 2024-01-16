import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Profile from './components/profile'
import Footer from './components/footer'
function App() {
  return (
    <div className="app-wrapper"> 
     <Header />
     <Navbar />
     <Profile />
     <Footer />
    </div>
  );
}




export default App;
