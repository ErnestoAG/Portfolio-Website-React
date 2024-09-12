import './App.css';
import Portfolio from './components/Portfolio';
import Footer from './components/UI/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Portfolio />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
