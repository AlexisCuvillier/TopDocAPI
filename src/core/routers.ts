import { Router } from "express"
import { topDocUserRouter } from "../topDocUser/controller/topDocUser.router"
import { swaggerRouter } from './swagger';
import { availabilityRouter } from '../availability/controller/availability.router';
import { addressRouter } from "../address/controller/address.router";

export const router = Router()

router.use('/docs1', swaggerRouter);
router.use('/topDocUser', topDocUserRouter)
router.use('/availability', availabilityRouter)
router.use('/address', addressRouter)
router.use('/hello', (req, res) => res.send('Hello Simplon Alexis'));
