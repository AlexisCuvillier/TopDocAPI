import { TopDocUserDAO } from '../../topDocUser/data/topDocUser.dao';
import { PatientDAO } from '../../patient/data/patient.dao';

export const relations = () => {
    TopDocUserDAO.hasOne(PatientDAO, { foreignKey: 'id_user', onDelete: 'cascade', hooks: true})
    PatientDAO.hasOne(TopDocUserDAO, { foreignKey: 'id_user', onDelete: 'cascade', hooks: true})
}