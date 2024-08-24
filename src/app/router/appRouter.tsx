import {
    type RouteObject,
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import type { RouteLinksType } from 'shared/router/types';

import { RootPage } from 'pages/.root';
import { ErrorBoundary } from 'pages/errorBoundary';
import { AboutPage } from 'pages/about';
import { ContactPage } from 'pages/contact';
import { HomePage } from 'pages/home';
import { PropertiesPage } from 'pages/properties';
import { PropertyDetailsPage } from 'pages/propertyDetails';
import { ServicesPage } from 'pages/services';

type RoutesMapType = {
    [key in RouteLinksType]: JSX.Element;
};

export const routesMap: RoutesMapType = {
    '/': <Navigate to="home" />,
    about: <AboutPage />,
    contact: <ContactPage />,
    home: <HomePage />,
    properties: <PropertiesPage />,
    propertyDetails: <PropertyDetailsPage />,
    services: <ServicesPage />,
};

export const routes = Object.keys(routesMap).map(
    (route): RouteObject => ({
        path: route,
        element: routesMap[route as RouteLinksType],
    }),
);

const router = createBrowserRouter([
    {
        element: <RootPage />,
        errorElement: <ErrorBoundary />,
        children: routes,
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
