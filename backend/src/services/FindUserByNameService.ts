import prismaClient from "../prisma";

class FindUserByNameService {
  async execute(nome: string) {
    const user = await prismaClient.usuario.findFirst({
      where: { nome: nome },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return user;
  }
}

export { FindUserByNameService };