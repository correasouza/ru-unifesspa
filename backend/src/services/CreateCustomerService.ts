import prismaClient from "../prisma";

interface CreateCustomerProps {
    nome: string;
    subsidiario: boolean;
    matricula: string;
}

class CreateCustomerService {
  async execute( { nome, subsidiario, matricula }: CreateCustomerProps) {
    
    if(!nome || subsidiario === undefined) {
        throw new Error("Nome e subsidiario são obrigatórios");
    }

    const customer = await prismaClient.usuario.create({
        data: {
            nome,
            subsidiario, 
            matricula
        },
    })

    return customer
  }
}

export { CreateCustomerService }