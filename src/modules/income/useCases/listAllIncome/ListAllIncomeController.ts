import { Request, Response } from "express";
import { prisma } from "../../../../database/prismaClient";
import { ListAllIncomeUseCase } from "./ListAllIncomeUseCase";

export class ListAllIncomeController {
  async handle(request: Request, response: Response) {
    const { id: id_income } = request.params;

    const listAllIncomeUseCase = new ListAllIncomeUseCase();

    const incomes = await listAllIncomeUseCase.execute({
      id_income,
    });

    return response.status(201).json(incomes);
  }
}
