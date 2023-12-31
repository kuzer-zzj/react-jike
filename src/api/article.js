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

export const updateArticleAPI = (data) =>{
    return request(
        {
            url: `/mp/articles/${data.id}?draft=false`,
            method: 'put',
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

export const getArticleAPI = (id) =>
request({
    url: `/mp/articles/${id}`,
})