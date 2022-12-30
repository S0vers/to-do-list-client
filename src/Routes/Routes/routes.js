import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Addtodo from "../../Pages/Addtodo/Addtodo";
import CompletedToDo from "../../Pages/CompletedToDo/CompletedToDo";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Todolist from "../../Pages/Todolist/Todolist";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PrivateRoute> <Addtodo></Addtodo></PrivateRoute>
            },
            {
                path: '/todolist',
                element: <PrivateRoute><Todolist></Todolist></PrivateRoute>
            },
            {
                path: '/completed',
                element: <PrivateRoute><CompletedToDo></CompletedToDo></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: '*',
        element: <Login></Login>
    }
])
export default router;