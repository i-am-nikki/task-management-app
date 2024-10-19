import App from '../app/containers/App.js';
import { initialTasks } from '../app/utils/data';

const HomePage = () => {
    return <App />;
};

export const getServerSideProps = async () => {
    return {
        props: {
            tasks: initialTasks,
        },
    };
};

export default HomePage;