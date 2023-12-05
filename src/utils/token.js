const TOKENKEY= 'token_key'
const getToken =()=>{
    return localStorage.getItem(TOKENKEY)
}
const setToken =(value)=>{
localStorage.setItem(TOKENKEY,value)
    
}
const removeToken =()=>{
    localStorage.removeItem(TOKENKEY)
}

export {getToken,setToken,removeToken}