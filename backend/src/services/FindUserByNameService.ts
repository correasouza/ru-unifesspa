import prismaClient from "../prisma";

class FindUserByNameService {
  async execute(matricula: string) {
    const user = await prismaClient.usuario.findFirst({
      where: { matricula: matricula },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return user;
  }
}

export { FindUserByNameService };