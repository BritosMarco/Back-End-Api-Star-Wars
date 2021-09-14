const PersonagemController = require("../controllers/PersonagensControllers");
const PersonagemMiddleware = require("../middlewares/PersonagemMiddlewares");
const routes = require("express").Router();

routes.get("/personagens", PersonagemController.getAll);

routes.get(
    "/personagens/:id",
    PersonagemMiddleware.validaID,
    PersonagemController.getById
);

routes.post("/personagens", PersonagemController.create);

routes.put(
    "/personagens/:id",
    PersonagemMiddleware.validaID,
    PersonagemController.update
);

routes.delete(
    "/personagens/:id",
    PersonagemMiddleware.validaID,
    PersonagemController.del
);

routes.get("/filterByName", PersonagemController.filterByName);
routes.get("/filterAll", PersonagemController.filterAll);

module.exports = routes;