import {  BrowserRouter, Route } from 'react-router-dom';

//importação das paginas
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  // {{ }} a primeira chave é para dizer que é um codigo JavaScript, a segunda é para dizer que é um objeto.
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/rooms/new" component={NewRoom} />
        <Route path="/" exact component={Home} />
      </AuthContextProvider>
    </BrowserRouter>
  );
  }
export default App;
