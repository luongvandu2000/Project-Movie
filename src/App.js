import { Routes, Route } from 'react-router-dom'
import Router from "./routes";
import { publicRoutes } from '~/routes'
import Movies from './components/layouts/movies';

function App() {
    return (
        // <Routes>
        //     {publicRoutes.map((route, index) => {
        //         const Page = route.component
        //         return <Route key={index} path={route.path} element={<Page />} />
        //     })}
        // </Routes>
        <Movies />
    );
}

export default App;
