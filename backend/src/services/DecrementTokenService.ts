import prismaClient from "../prisma";

export interface DecrementTokenProps {
  matricula: string;
}

class DecrementTokenService {
  async execute({ matricula }: DecrementTokenProps) {

    const user = await prismaClient.usuario.findUnique({
      where: { matricula: matricula },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    if (user.fichas < 1) {
      throw new Error("Usuário não possui fichas suficientes");
    }

    const updatedUser = await prismaClient.usuario.update({
      where: { matricula: matricula },
      data: {
        fichas: user.fichas - 1,
      },
    });

    return { fichas: updatedUser.fichas };
  }
}

export { DecrementTokenService };