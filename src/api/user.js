
import {request} from '@/utils'

export const loginAPI =(data)=>{
    return request({
        url:'/authorizations',
        method:'post',
        data
    })
}

export const getUserInfoAPI =()=>{
    return request({
        url:'/user/profile'
    })
}