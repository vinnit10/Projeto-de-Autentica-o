import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter , Route , Switch } from 'react-router-dom' 
import { ProtectedLayout } from './components/ProtectedLayout'
import { Login } from './components/Login'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path='/profile'>
            <ProtectedLayout>
              <h2>Profile</h2>
            </ProtectedLayout>
          </Route>

          <Route path='/login'>
            <Login/>
          </Route>

        </Switch>
      </BrowserRouter>
    </AuthProvider>   
  )
}

export default App
