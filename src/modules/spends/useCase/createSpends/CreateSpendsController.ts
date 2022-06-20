import { Request, Response } from "express";
import { CreateSpendsUseCase } from "./CreateSpendsUseCase";

export class CreateSpendsController {
  async handle(request: Request, response: Response) {
    const { description, payment, date } = request.body;

    const createSpendsUseCase = new CreateSpendsUseCase();

    const result = await createSpendsUseCase.execute({
      description,
      payment,
      date,
    });

    return response.status(201).json(result);
  }
}
