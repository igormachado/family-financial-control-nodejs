import { Request, Response } from "express";
import { CreateIncomeUseCase } from "./CreateIncomeUseCase";

export class CreateIncomeController {
  async handle(request: Request, response: Response) {
    const { description, payment, date } = request.body;

    const createIncomeUseCase = new CreateIncomeUseCase();

    const result = await createIncomeUseCase.execute({
      description,
      payment,
      date,
    });

    return response.status(201).json(result);
  }
}
