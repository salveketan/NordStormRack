
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Fotter from './Components/Fotter';
import Navbar from './Components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div >
      <BrowserRouter>
        <ChakraProvider>
          <Navbar />
          <AllRoutes />
          <Fotter />
        </ChakraProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
