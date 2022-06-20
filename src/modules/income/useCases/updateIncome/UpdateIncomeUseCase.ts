import { prisma } from "../../../../database/prismaClient";

interface IUpdateIncome {
  id_income: string;
  description: string;
  payment: number;
  date: string;
}

export class UpdateIncomeUseCase {
  async execute({ id_income, description, payment, date }: IUpdateIncome) {
    const updateIncome = await prisma.income.update({
      where: {
        id: id_income,
      },
      data: {
        description,
        payment,
        date,
      },
    });

    return updateIncome;
  }
}
