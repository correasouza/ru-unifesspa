import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListAllUsersService } from "./services/ListAllUsersService";
import { PurchaseTokenService } from "./services/PurchaseTokenService";
import { FindUserByNameService } from "./services/FindUserByNameService";

export async function routes(app: FastifyInstance, options: FastifyPluginOptions) {

    app.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    app.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })

    app.get("/listUsers", async (request: FastifyRequest, reply: FastifyReply) => {
        const listAllUsersService = new ListAllUsersService();
        const users = await listAllUsersService.execute();
        return reply.send(users);
    })
    
    app.post("/purchaseToken", async (request: FastifyRequest<{ Body: { id: string, quantidade: number } }>, reply: FastifyReply) => {
        const { id, quantidade } = request.body;
        const purchaseTokenService = new PurchaseTokenService();
        try {
            const result = await purchaseTokenService.execute({ id, quantidade });
            return reply.send(result);
        } catch (error) {
            if (error instanceof Error) {
                return reply.status(400).send({ error: error.message });
            }
            return reply.status(400).send({ error: "Unknown error" });
        }
    })

}