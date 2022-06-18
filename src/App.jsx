
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Fotter from './Components/Fotter';
import Navbar from './Components/Navbar';
import { Box, Center, Divider } from '@chakra-ui/react';

function App() {
  return (
    <div >
            <Center bg='tomato' h='42px' color='white'>
              Take 20% OFF selected summer styles online and in stores through June 19. Exclusions apply. Shop now.
            </Center>
            <Navbar />
            <Divider/>
            <AllRoutes />
            <Fotter />
      
    </div>
  );
}

export default App;
