import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { UserProvider } from './Context/useAuth';


function App() {

 

  return (
    <UserProvider>
      <div className="App">
      <Outlet/>
      <ToastContainer/>
    </div>
    </UserProvider>
    
  );
}

export default App;
