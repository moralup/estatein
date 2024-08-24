import { StrictMode } from 'react';
import { AppRouter } from './router';

export const App = () => {
    return (
        <StrictMode>
            <AppRouter />
        </StrictMode>
    );
};
