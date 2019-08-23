import User from './user.model';
import Todo from '../todo/todo.model'

export const getAll = async() => await User.find({})  

export const get = async ({ params: { id } },res) => {

    try {
       return await User.findById(id)  
    } catch (error) {
        return userNotFound(res)
    } 
}

export const create = async ({ body }, res) => {
    
    const user = await User.create(body)
    if (!user) {
        res.status(409).send('already exist')
    }
  
    res.status(201);
  
    return user;
  }
  
  export const update = async ({params: { id },body}) => await User.findByIdAndUpdate(id, { $set: body })
       

  export const remove = async ({params: { id }},res) => {

    const user = await User.findOneAndRemove({ _id: id})

    await Todo.remove({user:id})

    if (!user) {
        userNotFound(res)
    } else {
        res.status(200).send('DELETED')
    }
  }

  const userNotFound = (res) =>{
    return res.status(404).send('user not found')
}