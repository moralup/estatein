import { memo } from 'react';
import { companyValuesMatrix } from 'widgets/ourValues/model/consts';
import { Card } from 'shared/ui/card';
import { HStack, VStack } from 'shared/ui/stack';
import cls from './tabTable.module.scss';

// prettier-ignore
export const TabTable = memo(() => (
    <Card theme="outline" className={cls.valuesTable}>
        {companyValuesMatrix.map((companyValues, i) => (
            <HStack className={cls.valuesTableRow} key={`row_${i}`}>
                {companyValues.map(({ Icon, description, title }, i) => (
                    <VStack className={cls.tab} key={`tab_${i}`}>
                        <HStack gap={14}>
                            <Icon />
                            <h4 className={cls.title}>{title}</h4>
                        </HStack>
                        <p>{description}</p>
                    </VStack>
                ))}
            </HStack>
        ))}
    </Card>
));
