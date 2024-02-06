const { messageModel } = require('./Models/messages.model.js');

class MessageDaoMongo {
  constructor (){
    this.model = messageModel
  }

  addMessage = async (newMessage) => {
    await this.model.create(newMessage)
    return await this.getMessages()
  }

  getMessages = async () => await this.model.find({})

  clearMessages = async() => await this.model.deleteMany({})
}
// Exporta el DAO para su uso en otros archivos
exports.MessageMongo = MessageDaoMongo;