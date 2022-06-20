import { prisma } from "../../../../database/prismaClient";

interface IListAllIncomes {
  id_income: string;
}

export class ListAllIncomeUseCase {
  async execute({ id_income }: IListAllIncomes) {
    const incomes = await prisma.income.findMany({
      where: {
        id: id_income,
      },
      select: {
        id: true,
        description: true,
        payment: true,
        date: true,
      },
    });

    return incomes;
  }
}
