import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response =>(response.data))
}

const create = newObject =>{
    const request = axios.post(baseUrl,newObject)
    
    return request.then(response => response.data)
}

const update = (id,newObject) =>{
    console.log("done")
    const request = axios.put(`${baseUrl}/${id}`,newObject)
    return request.then(response => response.data)
}

const deleteObj = (id) =>{
    const request = axios.delete(`${baseUrl}/${id}`)
    
    return  request.then(response => console.log(response.data))
}
export default{ getAll, create, update, deleteObj}