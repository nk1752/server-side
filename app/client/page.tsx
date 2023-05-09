'use client'

import { useEffect } from 'react';

export default function Client() {
    
    console.log(
        'Client page rendering: this should only be printed on the server during ssr, and client when routing'
    );

    useEffect(() => {
        console.log('Client component rendered');
    });

    return (
        <div>
            <h1>Client Side Page</h1>
            <p>Server var: {process.env.NEXT_PUBLIC_CLIENT_MESSAGE}</p>
        </div>

    );
}