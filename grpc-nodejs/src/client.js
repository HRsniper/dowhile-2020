const grpc = require("grpc");
const path = require("path");

const AuthorsDefinition = grpc.load(path.resolve(__dirname, "../proto/authors.proto"));

const authorClient = new AuthorsDefinition.AuthorService("localhost:50051", grpc.credentials.createInsecure());

function promisify(method) {
  // Retorna um método aguardando parâmetros para ser executado como uma promise
  return (param) => {
    return new Promise((resolve, reject) => {
      authorClient[method](param, (err, response) => {
        // executa o método com os parâmetros e cria um novo callback
        if (err) return reject(err); // rejeita no erro
        resolve(response); // resolve no sucesso
      });
    });
  };
}

(async () => {
  const Hercules = await promisify("create")({ name: "Hercules" });
  console.log(Hercules);

  const HR = await promisify("create")({ name: "HR", website: "https://github.com/HRsniper" });
  console.log(HR);
})();
