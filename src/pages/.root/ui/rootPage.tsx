import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/header';
import { CTA } from 'widgets/CTA';
import { Footer } from 'widgets/footer';
import cls from './rootPage.module.scss'

export const RootPage = () => {
    return (
        <div className={cls.page}>
            <Header />
            <Outlet />
            <CTA />
            <Footer />
        </div>
    );
};
