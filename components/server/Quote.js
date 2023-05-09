// components/server/Quote.js

import { getQuote } from '../../lib/quote';
import os from 'os';

//const slow = 1000;

export default async function Quote() {
    const quote = await getQuote(slow ? 2000 : 0);
    return (
        <div>
            <p>
                {slow ? 'Slow' : 'Fast'} component rendered on
                <span>${os.hostname()}</span>
            </p>
            <blockquote>
                {quote.content}
            </blockquote>
        </div>
    );
}