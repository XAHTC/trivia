export interface IDifficultyOptions {
    id: number,
    value: string,
    label: string,
}
export interface ICategoryOptions  {
    id: number,
    value: number,
    label: string,
}


export const difficultyOptions:Array<IDifficultyOptions> = [
    { id: 1, value: 'easy', label: 'Easy' },
    { id: 2, value: 'medium', label: 'Medium' },
    { id: 3, value: 'hard', label: 'Hard' }
];

export const categoryOptions:Array<ICategoryOptions> = [
    { id: 9, value: 9, label: 'General Knowledge' },
    { id: 10, value: 10, label: 'Books' },
    { id: 11, value: 11, label: 'Film' },
    { id: 12, value: 12, label: 'Music' },
    { id: 13, value: 13, label: 'Musicals & Theatres' },
    { id: 14, value: 14, label: 'Television' },
    { id: 15, value: 15, label: 'Video Games' },
    { id: 16, value: 16, label: 'Board Games' },
    { id: 17, value: 17, label: 'Science & Nature' },
    { id: 18, value: 18, label: 'Computers' },
    { id: 19, value: 19, label: 'Mathematics' },
    { id: 20, value: 20, label: 'Mythology' },
    { id: 21, value: 21, label: 'Sports' },
    { id: 22, value: 22, label: 'Geography' },
    { id: 23, value: 23, label: 'History' },
    { id: 24, value: 24, label: 'Politics' },
    { id: 25, value: 25, label: 'Art' },
    { id: 26, value: 26, label: 'Celebrities' },
    { id: 27, value: 27, label: 'Animals' },
    { id: 28, value: 28, label: 'Vehicles' },
    { id: 29, value: 29, label: 'Comics' },
    { id: 30, value: 30, label: 'Gadgets' },
    { id: 31, value: 31, label: 'Japanese Anime & Manga' },
    { id: 32, value: 32, label: 'Cartoon & Animations' },
];