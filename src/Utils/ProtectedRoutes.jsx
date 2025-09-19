import { useSelector } from 'react-redux'
import {Outlet, Navigate} from 'react-router-dom'

function ProtectedRoutes(){
    const data = useSelector((store)=>store.user)
        if(!data){
            return <Navigate to={'/login'}/>
        }
        return <Outlet />
}

export default ProtectedRoutes

