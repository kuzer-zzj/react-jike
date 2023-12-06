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

