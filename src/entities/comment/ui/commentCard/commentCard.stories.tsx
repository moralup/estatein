import type { Meta, StoryObj } from '@storybook/react';
import type { CommentI } from 'entities/comment/model/types';
import { CommentCard } from './commentCard';
import ProfilePhotoMade from 'shared/assets/images/profile-photo-wade.png';
import { containerDecorator } from 'shared/config/storybook';

const positiveFeedback: CommentI = {
    feedbackTitle: 'Exceptional Service!',
    feedback: `Our experience with Estatein was outstanding. Their teams 
    dedication and professionalism made finding our dream home a
    breeze. Highly recommended! All right!`,
    rating: 5,
    user: {
        name: 'Wade Warren',
        image: ProfilePhotoMade,
        address: 'USA, California',
    },
};

const negativeFeedback: CommentI = {
    feedbackTitle: 'Disappointing Experience',
    feedback: `I was not satisfied with the service from Estatein. 
    The communication was poor, and it felt like my concerns were 
    not taken seriously. I expected better support in finding a 
    suitable home.`,
    rating: 2,
    user: {
        name: 'Jane Doe',
        image: ProfilePhotoMade,
        address: 'USA, New York',
    },
};

const meta: Meta<typeof CommentCard> = {
    title: 'entities/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const PositiveFeedback: Story = {
    args: {
        data: positiveFeedback,
    },
};

export const NegativeFeedback: Story = {
    args: {
        data: negativeFeedback,
    },
};

export const InContainer: Story = {
    args: {
        data: negativeFeedback,
    },
    decorators: containerDecorator(500),
};
