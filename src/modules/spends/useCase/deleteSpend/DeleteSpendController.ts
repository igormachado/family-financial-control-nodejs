import { Request, Response } from "express";
import { DeleteSpendUseCase } from "./DeleteSpendUseCase";

export class DeleteSpendController {
  async handle(request: Request, response: Response) {
    const { id: id_spend } = request.params;

    const deleteSpendUseCase = new DeleteSpendUseCase();

    const deleteSpend = await deleteSpendUseCase.execute({
      id_spend,
    });

    return response.status(201).json(deleteSpend);
  }
}
