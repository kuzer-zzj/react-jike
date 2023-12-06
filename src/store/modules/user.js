import { createSlice } from '@reduxjs/toolkit'
import { request,getToken,setToken as _setToken, removeToken } from '@/utils'

const userStore=createSlice({
    name: 'user',
    initialState: {
        token: getToken() || '',
        userInfo: {}
    },
    reducers:{
        setToken(state,action){
            state.token=action.payload
            _setToken(action.payload)
        },
        setUserInfo(state,action){
            state.userInfo=action.payload
        },
        clearUser(state){
            state.token=''
            state.userInfo={}
            // 清除token
            removeToken()
        }
        
    }
})

const {setToken,setUserInfo,clearUser}  = userStore.actions
const userReducer =userStore.reducer

const fetchLogin =(params) =>{
    return async (dis) =>{
        const res = await request.post('/authorizations',params)
        dis(setToken(res.data.token))
    }
}

const fetchUserInfo =() =>{
    return async (dis) =>{
        const res = await request.get('/user/profile')
        dis(setUserInfo(res.data))
    }
}

export {setToken,fetchLogin,fetchUserInfo,clearUser}
export default userReducer