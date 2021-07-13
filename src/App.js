import React from 'react';
import Home from './components/Home/Home';
import Signin from './components/Home/Signin';
import Signup from './components/Home/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListKelas from "./components/Kelas/ListKelas/ListKelas";
import Read from "./components/Kelas/Read/Read";
import NotFound from "./components/Kelas/NotFound/NotFound";
import Create from "./components/Kelas/Create/Create";
import { UserProvider } from "./components/Kelas/UserContext/UserContext";
import Delete from "./components/Kelas/Delete/Delete";
import Edit from "./components/Kelas/Edit/Edit";

function App() {
  return (<Router>
      <div className="App">
       <UserProvider> 
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path="/Signin" component={Signin} />
                    <Route path="/Signup" component={Signup} />
                    <Route exact path='/Dashboard' component={Dashboard} />
                    <Route path="/create" component={Create}/> 
                    <Route path="/read/:id" component={Read}/>
                    <Route path="/edit/:id" component={Edit}/>
                    <Route path="/delete/:id" component={Delete}/>
                    <Route exact path="/Listkelas" component={ListKelas}/>
                    <Route path="*" component={NotFound}/>
                  </Switch>
                  </UserProvider>
      </div>
    </Router>
  
  );
}

export default App;
