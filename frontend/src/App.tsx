import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';


function App() {

 

  return (
    <div className="App">
      <Outlet/>
      <ToastContainer/>
    </div>
  );
}

export default App;
