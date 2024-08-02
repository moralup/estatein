import type { Meta, StoryObj } from '@storybook/react';
import type { CommentI } from 'entities/comment/model/types';
import { CommentCard } from './commentCard';
import ProfilePHotoMade from 'shared/assets/images/profile-photo-wade.png';

export const comment: CommentI = {
    feedbackTitle: 'Exceptional Service!',
    feedback: `Our experience with Estatein was outstanding. Their teams 
    dedication and professionalism made finding our dream home a
    breeze. Highly recommended!`,
    rating: 5,
    user: {
        name: 'Wade Warren',
        image: ProfilePHotoMade,
        address: 'USA, California',
    },
};

const meta: Meta<typeof CommentCard> = {
    title: 'entities/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'centered',
    },
    args: {
        comment,
    },
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {};
