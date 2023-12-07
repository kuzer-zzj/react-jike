import { request } from "@/utils";

export const creatArticleAPI = (data) =>{
    return request(
        {
            url: '/mp/articles?draft=false',
            method: 'post',
            data
        }
    )
}

export const getArtListAPI = (params) =>{
    return request(
        {
            url: '/mp/articles',
            method: 'get',
            params
        }
    )
}

export const delArticleAPI = (id) =>
    request({
        url: `/mp/articles/${id}`,
        method: 'DELETE'
        
    })

