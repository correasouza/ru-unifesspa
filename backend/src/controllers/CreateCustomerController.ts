import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {

    const { nome, subsidiario, matricula } = request.body as { nome: string, subsidiario: boolean, matricula: string };
    

    const customerService = new CreateCustomerService();
    const customer = await customerService.execute({ nome, subsidiario, matricula });

    reply.send(customer);

  }
}

export { CreateCustomerController }