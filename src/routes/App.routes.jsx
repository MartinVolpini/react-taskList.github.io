import { createHashRouter , HashRouter, createBrowserRouter} from "react-router-dom";

//Pages....
import { ViewLogin } from "../m_pages/login/views/ViewLogin";

import { ViewTodo } from "../m_pages/todo/view/ViewTodo";

//PublicLayout
import { GeneralLayouts } from "../layouts/GeneralLayouts"

//Validacion de rutas...
import { ProtectedRoute } from "./ProtectedRoute";




export const router = createBrowserRouter([
    {
        path: "/",
        element:    (                            //Esta anidacion es para validar si esta loguiado
        <ProtectedRoute>  
            <GeneralLayouts> 
                <ViewTodo />  
            </GeneralLayouts>
       
        </ProtectedRoute>
        ),
        errorElement: <h1>404 Not Found!</h1>,
        // lazy: () => import("") ,
        // loader: () => <h1>Loading....</h1>
    },
    {
        path: "/login",
        element: <ViewLogin />
    },
    {
        path: "/todo",
        element: (
            <GeneralLayouts> 
                <ViewTodo />  
            </GeneralLayouts>
        )
    }
        
]
);