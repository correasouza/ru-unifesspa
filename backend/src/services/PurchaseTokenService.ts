import prismaClient from "../prisma";

interface PurchaseTokenProps {
    id: string;
    quantidade: number;
}

class PurchaseTokenService {
  async execute({ id, quantidade }: PurchaseTokenProps) {
    const user = await prismaClient.usuario.findUnique({
      where: { id: id },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (user.subsidiario) {
      if (user.ultimaCompra && user.ultimaCompra >= today) {
        throw new Error("Usuário subsidiado só pode comprar uma ficha por dia");
      }
      if (quantidade > 1) {
        throw new Error("Usuário subsidiado só pode comprar uma ficha por vez");
      }
      quantidade = 1; // Subsidiado só pode comprar uma ficha
    } else if (!user.subsidiario) {
      if (quantidade > 10) {
        throw new Error("Usuário não subsidiado só pode comprar até 10 fichas");
      } else if (user.fichas > 3 || (quantidade > 10 && user.fichas > 3)) {
        throw new Error("Usuário não subsidiado só pode comprar quando estiver com 3 ou menos fichas");
      }
    }

    await prismaClient.usuario.update({
      where: { id: id },
      data: {
        fichas: user.fichas + quantidade,
        ultimaCompra: new Date(),
      },
    });

    return { fichas: user.fichas + quantidade };
  }
}

export { PurchaseTokenService };