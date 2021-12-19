import CRUD from './CRUD';

class ProductService extends CRUD {
    constructor() {
        super("products")
    }
}

export default new ProductService();
