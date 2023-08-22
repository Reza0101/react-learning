import CommentStudents from './pages/CommentsStudent/CommentStudents';
import MainPage from './pages/Index/MainPage';
import Products from './pages/Products/Products';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import DetailCourses from './pages/DetailCourses/DetailCourses';
import AboutUs from './pages/AbouteUs/AboutUs';
import ShoppingCart from './pages/ShopingCart/ShoppingCart';
import NoteFoune from './components/NoteFound/NoteFoune';



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