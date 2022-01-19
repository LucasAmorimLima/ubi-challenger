import { ParsedQs } from "qs";
import Classes from "../schemas/Classe";
import Comment from '../schemas/Comment';

export async function findallFormated(
    name: string | string[] | ParsedQs | ParsedQs[] | undefined,
    description: string | string[] | ParsedQs | ParsedQs[] | undefined,
    data_end: string | string[] | ParsedQs | ParsedQs[] | undefined,
    data_init: string | string[] | ParsedQs | ParsedQs[] | undefined) {

    
    let query : string | string[] | ParsedQs | ParsedQs[] | undefined
    let collum : string 
    if (name) {
        query = name
        collum = "name"
    } else if(description){
        query = description
        collum = "description"
    }
    else if(data_init){
        query = data_init
        collum = "data_init"
    }
    else if(data_end){
        query = data_end
        collum = "data_end"
    }

    const classes = await Classes.find({collum:query})




    const ids : Array<string> = []
    const result: Array<{id: string,name:string,description:string, data_init:Date,data_end:Date,total_comments:number,last_comment:string,last_comment_date:Date}> = []
    const comments: Array<T> = []
    
    for (let index = 0; index < classes.length; index++) {
        ids.push(classes[index].id)
    }

    for (let index = 0; index < classes.length; index++) {
        
        comments.push(await getCommentById(ids[index]))
        
            const  updatedAt = comments[index][0].updatedAt
            const  comment = comments[index][0].comment
            result.push({ 
                id: classes[index].id,
                name: classes[index].name,
                description: classes[index].description,
                data_init: classes[index].data_init,
                data_end: classes[index].data_end,
                total_comments: classes[index].total_comments,
                last_comment : comment,
                last_comment_date : updatedAt,
            })

    }

    return result
}
async function getCommentById(id:string) {

    const comments = await Comment.find({id_class:id}).sort('-createdAt').limit(1)

    return comments
}