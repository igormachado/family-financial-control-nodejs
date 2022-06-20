import { Request, Response } from "express";
import { UpdateIncomeUseCase } from "./UpdateIncomeUseCase";

export class UpdateIncomeController {
  async handle(request: Request, response: Response) {
    const { id: id_income } = request.params;
    const { description, payment, date } = request.body;

    const updateIncomeUseCase = new UpdateIncomeUseCase();

    const updateIncome = await updateIncomeUseCase.execute({
      id_income,
      description,
      payment,
      date,
    });

    return response.status(201).json(updateIncome);
  }
}
