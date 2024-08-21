import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AddNote from './pages/Form/AddNote'
import EditNote from './pages/Form/EditNote'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Error from './pages/Error/Error'
import Warning from './pages/Error/Warning'


function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/create-note' exact element={<AddNote />} />
          <Route path='/edit-note/:id' exact element={<EditNote />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/warning' exact element={<Warning />} />
          <Route path='/*' exact element={<Error />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App