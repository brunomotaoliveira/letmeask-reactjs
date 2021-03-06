import {  BrowserRouter, Route, Switch } from 'react-router-dom';

//importação das paginas
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  // {{ }} a primeira chave é para dizer que é um codigo JavaScript, a segunda é para dizer que é um objeto.
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
  }
export default App;
