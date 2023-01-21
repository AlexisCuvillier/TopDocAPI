import { Router } from "express"
import { topDocUserRouter } from "../topDocUser/controller/topDocUser.router"
import { swaggerRouter } from './swagger';
import { availabilityRouter } from '../availability/controller/availability.router';
import { addressRouter } from "../address/controller/address.router";
import { roleRouter } from '../role/controller/role.router';
import { periodRouter } from "../period/controller/period.router";
import { hourlyRouter } from "../hourly/controller/hourly.router";
import { holidayRouter } from '../holiday/controller/holiday.router';
import { patientRouter } from '../patient/controller/patient.router';
import { administratorRouter } from '../administrator/controller/administrator.router';


export const router = Router()

router.use('/docs', swaggerRouter);
router.use('/topDocUser', topDocUserRouter)
router.use('/availability', availabilityRouter)
router.use('/address', addressRouter)
router.use('/role', roleRouter)
router.use('/period', periodRouter)
router.use('/hourly', hourlyRouter)
router.use('holiday', holidayRouter)
router.use('/patient', patientRouter)
router.use('/administrator', administratorRouter)
