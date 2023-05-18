import React, { useState } from 'react';

import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductView from './pages/ProductView';
import Forma from './pages/Forma';
import Edit from './pages/Edit';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='product/:id' element={<ProductView />} />
                    <Route path='product/add' element={<Forma />} />
                    <Route path='product/edit/:id' element={<Edit />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
