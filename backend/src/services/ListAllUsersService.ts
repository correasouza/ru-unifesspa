import prismaClient from "../prisma";

interface CreateCustomerProps {
    nome: string;
    subsidiario: boolean;
}

class ListAllUsersService {
  async execute() {
    const users = await prismaClient.usuario.findMany();
    return users;
  }
}

export { ListAllUsersService }