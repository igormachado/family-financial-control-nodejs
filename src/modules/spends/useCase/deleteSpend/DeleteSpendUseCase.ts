import { prisma } from "../../../../database/prismaClient";

interface IDeleteSpend {
  id_spend: string;
}

export class DeleteSpendUseCase {
  async execute({ id_spend }: IDeleteSpend) {
    const deleteSpend = await prisma.spends.delete({
      where: {
        id: id_spend,
      },
    });

    return deleteSpend;
  }
}
