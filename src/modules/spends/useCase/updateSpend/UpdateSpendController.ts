import { Request, Response } from "express";
import { UpdateSpendUseCase } from "./UpdateSpendUseCase";

export class UpdateSpendController {
  async handle(request: Request, response: Response) {
    const { id: id_spend } = request.params;
    const { description, payment, date } = request.body;

    const updateSpendUseCase = new UpdateSpendUseCase();

    const updateSpend = await updateSpendUseCase.execute({
      id_spend,
      description,
      payment,
      date,
    });

    return response.status(201).json(updateSpend);
  }
}
