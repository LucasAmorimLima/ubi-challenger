import moment from 'moment';
import { User } from '../entity/User';

export async function  findFormated(user: User[],term:boolean) {
    const result:result[]  = []
    let tasks:task[] = []
    await Promise.all(user.map((values)=>{

        values.task.map((content)=>{
            
            if (term) {
                const taskData  = moment(content.term).valueOf()
                const nowData = moment(new Date).valueOf()
                if (taskData>nowData) {
                    tasks.push({
                        term: content.term,
                        description: content.description
                    })
                }
            } else {
                tasks.push({
                    term: content.term,
                    description: content.description
                })
            }
        })
        result.push({
            email: values.email,
            task: {...tasks}
        });
        tasks= []
    }))
    return result
}

type result = {
    email:string
    task : task[]
}

type task = {
    term:Date
    description:string
}