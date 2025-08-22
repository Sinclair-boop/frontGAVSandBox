
import styles from './Home.module.css';
import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import PageTitle from '../../../components/PageTitle/PageTitle';
import { HOME_PAGE_TITLE } from '../../../constants/Constants';
import Loader from '../../../components/Loader/Loader';

const Home = () => {
    
    const [loading, setLoading] = useState<boolean>(true);

    return (
        <>
            <Banner/>
            <PageTitle value={HOME_PAGE_TITLE} />
            <Loader visible={loading} />
        </>
    )
}

export default Home;