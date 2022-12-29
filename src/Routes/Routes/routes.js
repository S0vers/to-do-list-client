import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Addtodo from "../../Pages/Addtodo/Addtodo";
import CompletedToDo from "../../Pages/CompletedToDo/CompletedToDo";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Todolist from "../../Pages/Todolist/Todolist";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Addtodo></Addtodo>
            },
            {
                path: '/todolist',
                element: <Todolist></Todolist>
            },
            {
                path: '/completed',
                element: <CompletedToDo></CompletedToDo>
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