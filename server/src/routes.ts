import { prisma } from "./lib/prisma";
import { FastifyInstance } from "fastify";

export function appRoutes(app: FastifyInstance) {

    // app.get('/listhabits', async ()=>{
    //     const habits = await prisma.habit.findMany({
    //         where: {
    //             title: {
    //                 startsWith: "Beber"
    //             }
    //         }
    //     })
    //     return habits
    // })

    app.get('/listhabits', async () => {
        const habits = await prisma.habit.findMany();
        return habits;
    });
}
