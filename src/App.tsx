import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import './App.css'

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
};

export default App;
