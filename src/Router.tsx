import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home'
import { ShoppingCart } from './pages/ShoppingCart';
import { FinishPage } from './pages/FinishPage';

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/"  element={<Home />}/>
                <Route path="/payment" element={<ShoppingCart/>}/>
                <Route path="/finishPage" element={<FinishPage/>}/>
            </Route>
        </Routes>
    );
}