import type { CarouselProps, ResponsiveManagerType } from 'entities/carousel';
import { Carousel } from 'entities/carousel';
import { InfoBlock, Container } from 'shared/ui/containerWithStars';
import { Button } from 'shared/ui/button';
import { clsx } from 'shared/lib/clsx';
import cls from './carouselObjectTemplate.module.scss';

export interface CarouselTemplateProps<P> extends CarouselProps<P> {
    /** className for carousel wrapper. Needed for add negative indent
     * 
     * (default mobile - 10px)
     * 
     * (default desktop - 15px)
     */
    clsIndentList?: string;
    /** className for card. Needed for add custom indent 
     * 
     * (default mobile - 10px)
     * 
     * (default desktop - 15px)
    */
    clsIndentCard?: string;
    /** Title of carousel */
    title: string;
    /** Description of carousel */
    description: string;
    /** Type of list. Needed for `View All ${type}` button. If it equal falsy value, the button not render */
    type?: string;
}

const defaultResponsiveManager: ResponsiveManagerType = {
    768: { items: 2 },
    1200: { items: 3 },
};

export const CarouselTemplate = <T,>(props: CarouselTemplateProps<T>) => {
    const {
        Card,
        cardsProps,
        commonProps,
        title,
        description,
        type,
        responsiveManager,
        navigationView,
        className,
        clsIndentList,
        clsIndentCard,
    } = props;

    return (
        <Container className={clsx(cls.template, className)}>
            <InfoBlock
                className={cls.textContainer}
                description={description}
                title={title}
            >
                {type && (
                    <Button
                        className={cls.btnViewAll}
                        theme="grayBackground"
                    >
                        {`View All ${type}`}
                    </Button>
                )}
            </InfoBlock>
            <Carousel
                Card={Card}
                cardsProps={cardsProps}
                commonProps={commonProps}
                responsiveManager={responsiveManager || defaultResponsiveManager}
                clsIndentList={clsIndentList || cls.carouselList}
                clsIndentCard={clsIndentCard || cls.card}
                navigationView={navigationView}

            />
        </Container>
    );
};
