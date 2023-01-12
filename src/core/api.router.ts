import { Router } from "express";
import { router } from "./routers";

export const apiRouter = Router()
apiRouter.use('/api', router)
