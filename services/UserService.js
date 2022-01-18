import CRUD from "./CRUDService";

class UserService extends CRUD {
    constructor() {
        super("users")
    }
}

export default new UserService();
