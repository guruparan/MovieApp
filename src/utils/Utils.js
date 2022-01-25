export const getRatingBackgroundColor = vote_average => {
    if (vote_average > 7)
        return 'green';
        
    if (vote_average > 5)
        return 'orange';

    if (vote_average > 1)
        return 'red';

    return 'grey';
};