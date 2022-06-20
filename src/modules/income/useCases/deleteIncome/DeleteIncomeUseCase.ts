import { prisma } from "../../../../database/prismaClient";

interface IDeleteIncome {
  id_income: string;
}
export class DeleteIncomeUseCase {
  async execute({ id_income }: IDeleteIncome) {
    const deleteIncome = await prisma.income.delete({
      where: {
        id: id_income,
      },
    });

    return deleteIncome;
  }
}
