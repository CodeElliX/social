import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile'
import Dialoges from './components/Dialoges/Dialoges';
import News from './components/News/News';
import{BrowserRouter, Routes, Route} from 'react-router-dom';


function App(props) {
  return (
     <BrowserRouter>
    <div className='app-wrapper'> 
     <Header />
     <Navbar />

     <div className='app-wrapper-content'>
      <Routes>
      <Route path='/dialogs/*' element={<Dialoges state={props.state.myMessageData} />} />
      <Route path='/profile/*' element={<Profile state={props.state.myPostData} addChangeState={props.addChangeState} postPush={props.postPush} profileInfoData={props.state.profileInfoData} addProfileInfoItemText={props.addProfileInfoItemText}/>} />
      <Route path='/news/*' element={<News />} />
       
       </Routes>
     </div>
    </div>
    </BrowserRouter>
  );
}




export default App;
