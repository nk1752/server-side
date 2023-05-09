// lib/quote.js

// utility for fetching random famous quotes from API, allowing simulation of a
// slow request

import sleep from 'sleep-promise';

export async function getQuote(delay = 0) {
    if (delay) {
        await sleep(delay);
    }
    return (
        await fetch('https://api.quotable.io/random?tags=technology')
    ).json();
}