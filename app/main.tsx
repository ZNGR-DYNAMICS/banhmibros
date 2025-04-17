import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './index.css';
import '../fonts/circula.css';
import '../fonts/poppins.css';
import App from './App.tsx';
import LegalPage from './pages/LegalPage.tsx';
import Layout from './components/Layout.tsx';
import OrderPage from './pages/OrderPage.tsx';
import MenuPage from './pages/MenuPage.tsx';
import ContactPage from './pages/ContactPage.tsx';

const passwordPrompt = (): void => {
    const validPassword = import.meta.env.VITE_PASSWORD_PROTECTION;
    
    if (typeof validPassword === 'undefined' || validPassword === '') {
        console.warn('Password protection variable not set. Skipping Protection.');
        sessionStorage.setItem('unlocked', 'true');
        return;
    }
    
    let userPassword = "";

    while (userPassword !== validPassword) {
         userPassword = prompt('Enter the password:') || "";
  
        if (userPassword === "") {
            alert("Access denied.");
        } else if (userPassword !== validPassword) {
            alert("Incorrect password.");
        }
    }
  
    alert("Access granted.");
    sessionStorage.setItem('unlocked', 'true');
};

const checkPageUnlocked = (): boolean => {
    return sessionStorage.getItem('unlocked') === 'true';
};

const isPreviewEnv = import.meta.env.MODE === 'prev';

if (isPreviewEnv && !checkPageUnlocked()) {
    passwordPrompt();
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/menu" element={<Layout navColor='text-black-500'><MenuPage /></Layout>} />
            <Route path="/legal" element={<Layout navColor='text-black-500'><LegalPage /></Layout>} />
            <Route path="/order" element={<Layout navColor='text-black-500'><OrderPage /></Layout>} />
            <Route path="/contact" element={<Layout navColor='text-black-500'><ContactPage /></Layout>} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </BrowserRouter>
    </StrictMode>,
);