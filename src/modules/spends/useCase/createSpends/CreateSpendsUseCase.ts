import { prisma } from "../../../../database/prismaClient";

interface ICreateSpend {
  description: string;
  payment: number;
  date: string;
}

export class CreateSpendsUseCase {
  async execute({ description, payment, date }: ICreateSpend) {
    const spendExists = await prisma.spends.findFirst({
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

    if (description && spendExists) {
      throw new Error("This spend already exists.");
    }

    const createSpend = await prisma.spends.create({
      data: {
        description,
        payment,
        date,
      },
    });

    return createSpend;
  }
}
