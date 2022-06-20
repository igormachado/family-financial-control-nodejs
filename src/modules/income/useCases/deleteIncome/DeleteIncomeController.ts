import { Request, Response } from "express";
import { DeleteIncomeUseCase } from "./DeleteIncomeUseCase";

export class DeleteIncomeController {
  async handle(request: Request, response: Response) {
    const { id: id_income } = request.params;

    const deleteIncomeUseCase = new DeleteIncomeUseCase();

    const deleteIncome = await deleteIncomeUseCase.execute({
      id_income,
    });

    return response.status(201).json(deleteIncome);
  }
}
