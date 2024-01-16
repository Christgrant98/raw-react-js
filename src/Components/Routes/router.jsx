import { createBrowserRouter } from 'react-router-dom';
import RegistrationPage from '../Register';
import LoginPage from '../Login/index.jsX';



const router = createBrowserRouter([
  // you must set an route path as '/' only due to react undertstand this as the default route (home)
  {path: '/', element: <LoginPage/>},
  {path:'register', element:<RegistrationPage/>},
])


export default router 