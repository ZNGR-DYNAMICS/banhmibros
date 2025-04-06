import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './index.css';
import '../fonts/circula.css';
import '../fonts/poppins.css';
import App from './App.tsx';
import Menu from './components/Menu/Menu.tsx';
import Legal from './components/Legal/Legal.tsx';
import Layout from './components/Layout.tsx';
import OrderPage from './pages/OrderPage.tsx';

const passwordPrompt = (): void => {
    const validPassword = "test";

    let userPassword = "";

    while (userPassword !== validPassword) {
        userPassword = prompt("Enter the password: ") || "";
        
        if(userPassword === "") {
            alert("Access denied.");
        } else if (userPassword !== validPassword) {
            alert("Incorrect password.")
        }
    }

    alert("Access granted.");
}

passwordPrompt();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/menu" element={<Layout><Menu /></Layout>} />
                <Route path="/legal" element={<Layout navColor='text-black-500'><Legal /></Layout>} />
                <Route path="/order" element={<Layout navColor='text-black-500'><OrderPage /></Layout>} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
