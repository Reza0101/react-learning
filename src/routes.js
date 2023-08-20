import CommentStudents from './components/CommentStudents';
import MainPage from './components/MainPage';
import Products from './components/Products';
import Login from './components/IsLogged/Login';
import Logout from './components/IsLogged/Logout';
import DetailCourses from './components/DetailCourses';
import AboutUs from './components/AbouteUs/AboutUs';
import ShoppingCart from './components/IsLogged/ShoppingCart';
import NoteFoune from './components/NoteFoune';



let routes = [
    { path: '/', element:<MainPage />},
    { path: '*', element:<NoteFoune />},
    { path: '/cart', element:<ShoppingCart />},
    { path: '/courses', element:<Products />},
    { path: '/student-comments', element:<CommentStudents />},
    { path: '/login', element:<Login />},
    { path: '/register', element:<Logout />},
    { path: '/courses/:name', element:<DetailCourses />},
    { path: '/about-us', element:<AboutUs />}
]

export default routes;