
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
  <UserContextProvider>
  <h1>Welcome from sarthak Ahir</h1>
  <Login />
  <Profile />
    </UserContextProvider>
  )
}

export default App
