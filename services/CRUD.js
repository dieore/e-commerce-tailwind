import axios from 'axios';

class CRUD {
    constructor(model) {
        this.baseURL = `http://localhost:3000/api/${model}`
        this.http = axios.create();
        this.http.defaults.baseURL = this.baseURL;
    }

    async find() {
        return await this.http.get();
    }
    
    async findById(id) {
        return await this.http.get("/" + id);
    } 

    async create(data) {
        return await this.http.post("/", data);
    }
}

export default CRUD;