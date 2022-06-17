
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Fotter from './Components/Fotter';
import Navbar from './Components/Navbar';
import { Box, Center, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './Redux/store';

function App() {
  return (
    <div >
      <Provider store={store}>
        <BrowserRouter>
          <ChakraProvider>
            <Center bg='tomato' h='42px' color='white'>
              Take 20% OFF selected summer styles online and in stores through June 19. Exclusions apply. Shop now.
            </Center>
            <Navbar />
            <AllRoutes />
            <Fotter />
          </ChakraProvider>
        </BrowserRouter>

      </Provider>


    </div>
  );
}

export default App;
