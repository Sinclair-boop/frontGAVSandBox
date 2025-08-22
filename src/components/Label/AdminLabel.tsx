import styles from './Label.module.css';
// import { useUser } from '../../context/UserContext';
// import { User } from '../../models/User';

const AdminLabel = () => {
    
    // const { user } = useUser();

    // return User.isAdmin(user) && <span className={styles.admin}>ADMIN</span>
    return <span className={styles.admin}>USER</span>

}

export default AdminLabel;