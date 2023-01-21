import { TopDocUserDAO } from '../../topDocUser/data/topDocUser.dao';
import { PatientDAO } from '../../patient/data/patient.dao';
import { AdministratorDAO } from '../../administrator/data/administrator.dao';
import { HourlyDAO } from '../../hourly/data/hourly.dao';
import { AvailabilityDAO } from '../../availability/data/availability.dao';

export const relations = () => {
    TopDocUserDAO.hasOne(PatientDAO, { foreignKey: 'id_user', onDelete: 'cascade', hooks: true})
    PatientDAO.hasOne(TopDocUserDAO, { foreignKey: 'id_user', onDelete: 'cascade', hooks: true})
    
    TopDocUserDAO.hasOne(AdministratorDAO, { foreignKey: 'id_user', onDelete: 'cascade', hooks: true})
    AdministratorDAO.hasOne(TopDocUserDAO, { foreignKey: 'id_user', onDelete: 'cascade', hooks: true})

    HourlyDAO.belongsToMany(AvailabilityDAO, {through: 'HourlyAvailability', foreignKey: 'id_hourly',otherKey: 'id_days',onDelete: 'cascade', hooks: true, timestamps:false});
    AvailabilityDAO.belongsToMany(HourlyDAO, { foreignKey: 'id_days',otherKey:'id_hourly', through: 'HourlyAvailability',onDelete: 'cascade', hooks: true, timestamps:false });
}