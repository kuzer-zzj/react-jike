import { createSlice } from '@reduxjs/toolkit'
import { request } from '@/utils'

const userStore=createSlice({
    name: 'user',
    initialState: {
        token: localStorage.getItem('token_key') || '',
    },
    reducers:{
        setToken(state,action){
            state.token=action.payload
            localStorage.setItem('token_key',action.payload)
        }
    }
})

const {setToken}  = userStore.actions
const userReducer =userStore.reducer

const fetchLogin =(params) =>{
    return async (dis) =>{
        const res = await request.post('/authorizations',params)
        dis(setToken(res.data.token))
    }
}

export {setToken,fetchLogin}
export default userReducer