// app/server-async-fetching/page.js

// a page containing a fast-loading and a slow-loading components,
// both are server components

import Quote from '../../components/server/Quote';

export default function AsyncLoading() {
    return (
        <div>
            <Quote />
            <Quote slow={true} />
        </div>
    );
}