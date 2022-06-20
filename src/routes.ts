import { Router } from "express";
import { UpdateIncomeController } from "./modules/income/useCases/updateIncome/UpdateIncomeController";
import { CreateIncomeController } from "./modules/income/useCases/createIncome/CreateIncomeController";
import { ListAllIncomeController } from "./modules/income/useCases/listAllIncome/ListAllIncomeController";
import { DeleteIncomeController } from "./modules/income/useCases/deleteIncome/DeleteIncomeController";
import { CreateSpendsController } from "./modules/spends/useCase/createSpends/CreateSpendsController";
import { ListAllSpendsController } from "./modules/spends/useCase/listAllSpends/ListAllSpendsController";
import { UpdateSpendController } from "./modules/spends/useCase/updateSpend/UpdateSpendController";
import { DeleteSpendController } from "./modules/spends/useCase/deleteSpend/DeleteSpendController";

const routes = Router();

const createIncomeController = new CreateIncomeController();
const listAllIncomeController = new ListAllIncomeController();
const updateIncomeController = new UpdateIncomeController();
const deleteIncomeController = new DeleteIncomeController();

const createSpendController = new CreateSpendsController();
const listAllSpendController = new ListAllSpendsController();
const updateSpendController = new UpdateSpendController();
const deleteSpendController = new DeleteSpendController();

routes.post("/income", createIncomeController.handle);
routes.get("/income", listAllIncomeController.handle);
routes.get("/income/:id", listAllIncomeController.handle);
routes.put("/income/:id", updateIncomeController.handle);
routes.delete("/income/:id", deleteIncomeController.handle);

routes.post("/spend", createSpendController.handle);
routes.get("/spend", listAllSpendController.handle);
routes.get("/spend/:id", listAllSpendController.handle);
routes.put("/spend/:id", updateSpendController.handle);
routes.delete("/spend/:id", deleteSpendController.handle);

export { routes };
