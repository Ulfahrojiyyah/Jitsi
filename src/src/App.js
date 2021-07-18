import React from 'react';
import Home from './components/Home/Pages/Home';
import Signin from './components/Home/Pages/Signin/Signin';
import Signup from './components/Home/Pages/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListKuliah from "./components/Kuliah/ListKuliah/ListKuliah";
import Read from "./components/Kuliah/Read/Read";
import NotFound from "./components/Kuliah/NotFound/NotFound";
import Create from "./components/Kuliah/Create/Create";
import { UserProvider } from "./components/Kuliah/KuliahContext/KuliahContext";
import Delete from "./components/Kuliah/Delete/Delete";
import Edit from "./components/Kuliah/Edit/Edit";
import LihatKelas from './components/Kelas/LihatKelas/LihatKelas';
import Tambah from './components/Kelas/Tambah/Tambah';
import EditKelas from './components/Kelas/EditKelas/EditKelas';
import Hapus from './components/Kelas/Hapus/Hapus';
import {KelasProvider} from './components/Kelas/KelasContext/KelasContext';


function App() {
  return (<Router>
      <div className="App">
       <UserProvider> 
       <KelasProvider> 
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path="/Signin" component={Signin} />
                    <Route path="/Signup" component={Signup} />
                    <Route exact path='/Dashboard' component={Dashboard} />
                    <Route path="/create" component={Create}/> 
                    <Route path="/read/:id" component={Read}/>
                    <Route path="/edit/:id" component={Edit}/>
                    <Route path="/delete/:id" component={Delete}/>
                    <Route exact path="/Listkuliah" component={ListKuliah}/>
                    <Route path="*" component={NotFound}/>
                    <Route path="/Tambah" component={Tambah}/> 
                    <Route path="/LihatKelas" component={LihatKelas}/>
                    <Route path="/EditKelas/:id" component={EditKelas}/>
                    <Route path="/Hapus/:id" component={Hapus}/>
                  </Switch>
            </KelasProvider>
          </UserProvider>
      </div>
    </Router>
  
  );
}

export default App;
