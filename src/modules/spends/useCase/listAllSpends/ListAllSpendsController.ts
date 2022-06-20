import { Request, Response } from "express";
import { ListAllSpendsUseCase } from "./ListAllSpendsUseCase";

export class ListAllSpendsController {
  async handle(request: Request, response: Response) {
    const { id: id_spend } = request.params;

    const listAllSpendsUseCase = new ListAllSpendsUseCase();

    const result = await listAllSpendsUseCase.execute({
      id_spend,
    });

    return response.status(201).json(result);
  }
}
