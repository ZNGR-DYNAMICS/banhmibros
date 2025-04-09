import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './index.css';
import '../fonts/circula.css';
import '../fonts/poppins.css';
import App from './App.tsx';
import Legal from './components/Legal/Legal.tsx';
import Layout from './components/Layout.tsx';
import OrderPage from './pages/OrderPage.tsx';
import MenuPage from './pages/MenuPage.tsx';

export function AppWrapper() {
    const [isUnlocked, setIsUnlocked] = useState(
        import.meta.env.MODE === 'prod' ? true : false
    );

    useEffect(() => {
        if (import.meta.env.MODE !== 'production' && !isUnlocked) {
            const passwordPrompt = (): boolean => {
                const validPassword = import.meta.env.VITE_PAGE_LOCK_PASS;
                let userPassword = '';

                while (userPassword !== validPassword) {
                    userPassword = prompt('Enter the password: ') || '';

                    if (userPassword === '') {
                        alert('Access denied.');
                        return false;
                    } else if (userPassword !== validPassword) {
                        alert('Incorrect password.');
                    } else {
                        alert('Access granted.');
                        return true;
                    }
                }
                return false;
            };

            if (passwordPrompt()) {
                setIsUnlocked(true);
            }
        }
    }, [isUnlocked])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/menu" element={<Layout navColor='text-black-500'><MenuPage /></Layout>} />
                <Route path="/legal" element={<Layout navColor='text-black-500'><Legal /></Layout>} />
                <Route path="/order" element={<Layout navColor='text-black-500'><OrderPage /></Layout>} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppWrapper />
    </StrictMode>
)
