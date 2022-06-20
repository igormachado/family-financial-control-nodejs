import { prisma } from "../../../../database/prismaClient";

interface IListSpends {
  id_spend: string;
}

export class ListAllSpendsUseCase {
  async execute({ id_spend }: IListSpends) {
    const listAllSpends = await prisma.spends.findMany({
      where: {
        id: id_spend,
      },
    });

    return listAllSpends;
  }
}
