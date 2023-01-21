import { TopDocUserHandler } from './topDocUser/controller/topDocUser.handler';
import { TopDocUserRepository } from './topDocUser/data/topDocUser.repository';
import { TopDocUserService } from './topDocUser/topDocUser.service';
import { AddressHandler } from './address/controller/address.handler';
import { AddressRepository } from './address/data/address.repository';
import { AddressService } from './address/address.service';
import { AvailabilityHandler } from './availability/controller/availability.handler';
import { AvailabilityService } from './availability/availability.service';
import { AvailabilityRepository } from './availability/data/availability.repository';
import { HourlyHandler } from './hourly/controller/hourly.handler';
import { HourlyService } from './hourly/hourly.service';
import { HourlyRepository } from './hourly/data/hourly.repository';
import { HolidayHandler } from './holiday/controller/holiday.handler';
import { HolidayService } from './holiday/holiday.service';
import { HolidayRepository } from './holiday/data/holiday.repository';
import { PeriodHandler } from './period/controller/period.handler';
import { PeriodService } from './period/period.service';
import { PeriodRepository } from './period/data/period.repository';
import { RoleHandler } from './role/controller/role.handler';
import { RoleService } from './role/role.service';
import { RoleRepository } from './role/data/role.repository';
import { CabinetHandler } from './cabinet/controller/cabinet.handler';
import { CabinetService } from './cabinet/cabinet.service';
import { CabinetRepository } from './cabinet/data/cabinet.repository';
import { PatientHandler } from './patient/controller/patient.handler';
import { PatientService } from './patient/patient.service';
import { PatientRepository } from './patient/data/patient.repository';
import { AdministratorHandler } from './administrator/controller/administrator.handler';
import { AdministratorService } from './administrator/administrator.service';
import { AdministratorRepository } from './administrator/data/administrator.repository';


export const topDocUserHandler = new TopDocUserHandler(new TopDocUserService(new TopDocUserRepository()));
export const addressHandler = new AddressHandler(new AddressService(new AddressRepository()));
export const availabilityHandler = new AvailabilityHandler(new AvailabilityService(new AvailabilityRepository()));
export const hourlyHandler = new HourlyHandler(new HourlyService(new HourlyRepository()));
export const holidayHandler = new HolidayHandler(new HolidayService(new HolidayRepository()));
export const periodHandler = new PeriodHandler(new PeriodService(new PeriodRepository()));
export const roleHandler = new RoleHandler(new RoleService(new RoleRepository()));
export const cabinetHandler = new CabinetHandler(new CabinetService(new CabinetRepository()));
export const patientHandler = new PatientHandler(new PatientService(new PatientRepository()));
export const administratorHandler  = new AdministratorHandler(new AdministratorService(new AdministratorRepository()))