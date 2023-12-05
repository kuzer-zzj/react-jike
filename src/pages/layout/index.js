import { request } from "@/utils"
import { useEffect } from "react"

const LayOut = ()=>{
    useEffect(()=>{
        request.get('/user/profile')
    },[])
    return <div>
        this is the layout
    </div>
}

export default LayOut