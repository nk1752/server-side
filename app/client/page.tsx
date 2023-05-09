'use client'

export default function Client() {
    
    console.log('Client page rendering')

    return (
        <div>
            <h1>Client Side Page</h1>
            <p>Server var: {process.env.NEXT_PUBLIC_CLIENT_MESSAGE}</p>
        </div>

    );
}