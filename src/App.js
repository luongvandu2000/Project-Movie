import { Routes, Route } from 'react-router-dom';
import Router from './routes';
import { publicRoutes } from '~/routes';
import Person from './pages/person';

function App() {
    return (
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Page />} />;
            })}
        </Routes>
    );
}

export default App;
