import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Home from './routes/home/home.component.jsx';

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the navigation Bar</h1>
      </div>
      <Outlet />
    </div>
  )
}

const Shop = () => {
  return (
    <h1> its the shop yo </h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
      </Route>
    </Routes>
  )
};

export default App;
