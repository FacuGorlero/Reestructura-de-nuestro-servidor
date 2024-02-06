const { userModel } = require("./Models/user.model");
const {CartMongo} = require("./cart.daomongo.js");

const carts = new CartMongo();

class UserDaoMongo {
    constructor() {
      this.model = userModel;
    }
  
    getUsersPaginate = async (limit=10, page=1) => await thism.model.paginate({}, {limit, page, lean: true})
  
    getUsers = async () => await this.model.find({})
    getUserBy = async (filter) => await this.model.findOne({filter})
    createUser = async (newUser) => {
      newUser.cart = await carts.create();
      await this.model.create(newUser)
    }
    updateUser = async (uid, userUpdate) => await this.model.findOneAndUpdate({_id: uid}, userUpdate)
    deleteUser = async (uid) => await this.model.findOneAndDelete({_id: uid})
  }

exports.UserMongo = UserDaoMongo