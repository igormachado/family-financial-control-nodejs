import { prisma } from "../../../../database/prismaClient";

interface ICreateIncome {
  description: string;
  payment: number;
  date: string;
}

export class CreateIncomeUseCase {
  async execute({ description, payment, date }: ICreateIncome) {
    const incomeExists = await prisma.income.findFirst({
      where: {
        description: {
          equals: description,
          mode: "insensitive",
        },
        date: {
          equals: date,
          mode: "insensitive",
        },
      },
    });

    if (description && incomeExists) {
      throw new Error("This income already exists.");
    }

    const createIncome = await prisma.income.create({
      data: {
        description,
        payment,
        date,
      },
    });

    return createIncome;
  }
}
