import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile'
import Dialoges from './components/Dialoges/Dialoges';
import{BrowserRouter, Routes, Route} from 'react-router-dom';


function App(props) {
  return (
     <BrowserRouter>
    <div className='app-wrapper'> 
     <Header />
     <Navbar />

     <div className='app-wrapper-content'>
      <Routes>
      <Route path='/dialogs/*' element={<Dialoges dialogesData={props.dialogesData} messageData={props.messageData}/>} />
      <Route path='/profile/*' element={<Profile myPostsData={props.myPostsData}/>} />
       
       </Routes>
     </div>
    </div>
    </BrowserRouter>
  );
}




export default App;
