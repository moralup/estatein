/* eslint-disable max-len */
import { Deal } from 'entities/deal';
import cls from './carouselObjectValuedClients.module.scss';
import { CarouselTemplate } from '../../.template/carouselObjectTemplate';
import { valuedClients } from '../model/consts';

const responsive = {
    768: { items: 2 },
};

export const CarouselObjectValuedClients = () => {
    return (
        <CarouselTemplate
            title="Our Valued Clients"
            description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving."
            // className={cls.container}
            Card={Deal}
            cardsProps={valuedClients}
            navigationView="fullWidth"
            responsiveManager={responsive}
            clsIndentList={cls.carouselList}
            clsIndentCard={cls.card}
            className={cls.container}
        />
    );
};
