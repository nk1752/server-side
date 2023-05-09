// app/client-fetching/page.js

'use client';

import { useState, Suspense } from 'react';
import Quote from '../../components/client/Quote';

export default function ClientFetching() {
    // use a button to toggle the loading of components to make sure 
    // they're rendered on the client-side
    const [show, setShow] = useState(false);

    return (
        <>
            <h1>Client Fetching</h1>
            <button onClick={() => setShow(true)}>
                Show Components
            </button>

            {show && (
                <>
                    <div>
                        <Suspense fallback={<p>Fast component loading...</p>}>
                            <Quote />
                        </Suspense>

                        <Suspense fallback={<p>Slow component loading...</p>}>
                            <Quote slow={true} />
                        </Suspense>
                    </div>
                </>
            )}
        </>
    );
}