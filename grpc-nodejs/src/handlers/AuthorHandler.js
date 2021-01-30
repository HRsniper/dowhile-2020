// const authorController = new (require("../controllers/AuthorController.js"))();
const { AuthorController } = require("../controllers/AuthorController.js");

const authorController = new AuthorController();

// _ =  chamada do grpc, one tem os paráramos entrada coisas que vem do cliente
function list(_, callback) {
  return callback(null, authorController.list());
}

// call.request = { request }
function find({ request }, callback) {
  try {
    const id = request.id;

    const author = authorController.find(id);
    return callback(null, author);
  } catch (error) {
    return callback(error, null);
  }
}

// call.request = { request }
function update({ request }, callback) {
  try {
    const id = request.id;
    const updateParams = request.authorUpdateParams;

    const author = authorController.update(id, updateParams);
    return callback(null, author);
  } catch (error) {
    return callback(error, null);
  }
}

// call.request = { request }
function remove({ request }, callback) {
  const id = request.id;
  return callback(null, authorController.delete(id));
}

// call.request = { request }
function create({ request }, callback) {
  return callback(null, authorController.create(request));
}

// cada message do .proto encara-se como um objeto (request)

module.exports = { list, find, remove, create, update };
