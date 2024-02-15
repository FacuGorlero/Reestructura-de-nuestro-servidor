// Importaciones
//const { ObjectId } = require('bson');
const { productModel } = require('./Models/products.model.js');  // Importa el modelo de productos

class ProductDaoMongo {
  constructor() {
    this.model = productModel;
  }

  getProducts = async (query, options) => await this.model.paginate(query, options);

  getProductsById = async (pid) => await this.model.findById({ _id: pid }).lean();

  addProduct = async (fields) => await this.model.create(fields);

  updateProduct = async (pid, changedProduct) => await this.model.findByIdAndUpdate(pid, changedProduct, {new: true});

  deleteProductById = async (pid) => await this.model.findByIdAndDelete(pid);

  deleteProductByCode = async (pcode) => await this.model.findOneAndDelete({code: pcode});

  getCategorys = async () => await this.model.distinct('category').sort();


  // Método para obtener todas las categorías de productos
  // getCategorys = async () => {
  //   try {
  //     // Obtener las categorías usando agregación
  //     const categories = await this.model.aggregate([
  //       { $group: { _id: "$category" } },
  //       { $sort: { _id: 1 } },
  //     ]);
  //     // Devolver un arreglo de nombres de categorías
  //     return categories.map((cat) => cat._id);
  //   } catch (error) {
  //     console.error(error);
  //     throw new CustomError("Error no identificado", 500, "getCategorys");
  //   }
  // };
}

// Exportar la clase ProductDaoMongo
exports.ProductMongo = ProductDaoMongo;


