/* eslint-disable max-len */
import type { CommentI } from 'entities/comment';
import ProfilePhotoWade from 'shared/assets/images/profile-photo-wade.png';
import ProfilePhotoEmelie from 'shared/assets/images/profile-photo-emelie.png';
import ProfilePhotoJohn from 'shared/assets/images/profile-photo-john.png';

export const comments: CommentI[] = [
    {
        rating: 5,
        feedbackTitle: 'Exceptional Service!',
        feedback:
            "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        user: {
            name: 'Wade Warren',
            address: 'USA, California',
            image: ProfilePhotoWade,
        },
    },
    {
        rating: 5,
        feedbackTitle: 'Efficient and Reliable',
        feedback: `Estatein provided us with top-notch service.
            They helped us sell our property quickly and at a great price.
            We couldn't be happier with the results.`,
        user: {
            name: 'Emelie Thomson',
            address: 'USA, Florida',
            image: ProfilePhotoEmelie,
        },
    },
    {
        rating: 5,
        feedbackTitle: 'Trusted Advisors',
        feedback: `The Estatein team guided us through the entire buying
            process. Their knowledge and commitment to our needs were impressive.
            Thank you for your support!`,
        user: {
            name: 'John Mans',
            address: 'USA, Nevada',
            image: ProfilePhotoJohn,
        },
    },
];
