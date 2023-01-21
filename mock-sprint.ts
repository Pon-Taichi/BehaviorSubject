export type Sprint = {
    id: string;
    name: string;
    timeFrame: string;
};

export const SPRINT_LIST: Sprint[] = [
    { id: '1', name: 'Sprint1', timeFrame: 'past' },
    { id: '2', name: 'Sprint2', timeFrame: 'current' },
    { id: '3', name: 'Sprint3', timeFrame: 'future' },
];
