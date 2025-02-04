import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {

    const { nome, subsidiario } = request.body as { nome: string, subsidiario: boolean };
    

    const customerService = new CreateCustomerService();
    const customer = await customerService.execute({ nome, subsidiario });

    reply.send(customer);

  }
}

export { CreateCustomerController }