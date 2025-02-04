import prismaClient from "../prisma";

interface CreateCustomerProps {
    nome: string;
    subsidiario: boolean;
}

class CreateCustomerService {
  async execute( { nome, subsidiario }: CreateCustomerProps) {
    
    if(!nome || subsidiario === undefined) {
        throw new Error("Nome e subsidiario são obrigatórios");
    }

    const customer = await prismaClient.usuario.create({
        data: {
            nome,
            subsidiario
        },
    })

    return customer
  }
}

export { CreateCustomerService}