import type { Meta, StoryObj } from '@storybook/react';
import { FAQCard } from './FAQCard';

const questionFullAnswer = {
    question: 'How do I search for properties on Estatein?',
    answer: `Learn how to use our user-friendly search tools to find properties that match your criteria.
        Whether you're looking for a specific type of property or exploring various options,
        our platform offers advanced filters and intuitive navigation to simplify your search.`,
};

const questionNotFullAnswer = {
    ...questionFullAnswer,
    linkReadMore: 'https://questions.answer',
};

const meta = {
    title: 'entities/FAQCard',
    component: FAQCard,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof FAQCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFullAnswer: Story = {
    args: { data: questionNotFullAnswer },
};

export const FullAnswer: Story = {
    args: { data: questionFullAnswer },
};
