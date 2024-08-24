import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/header';
import { CTA } from 'widgets/CTA';
import { Footer } from 'widgets/footer';

export const RootPage = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <CTA />
            <Footer />
        </div>
    );
};
