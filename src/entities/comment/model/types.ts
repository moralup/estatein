export interface UserI {
    name: string;
    address: string;
    image: string;
}

export interface CommentI {
    rating: 1 | 2 | 3 | 4 | 5;
    feedbackTitle: string;
    feedback: string;
    user: UserI;
}
