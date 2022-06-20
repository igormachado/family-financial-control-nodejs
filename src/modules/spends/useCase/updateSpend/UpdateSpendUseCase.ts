import { prisma } from "../../../../database/prismaClient";

interface IUpdateSpend {
  id_spend: string;
  description: string;
  payment: number;
  date: string;
}

export class UpdateSpendUseCase {
  async execute({ id_spend, description, payment, date }: IUpdateSpend) {
    const updateSpend = await prisma.spends.update({
      where: {
        id: id_spend,
      },
      data: {
        description,
        payment,
        date,
      },
    });

    return updateSpend;
  }
}
