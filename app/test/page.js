// app/page.js

import Link from "next/link";

// This file maps to the index route (/)
export default function Page() {
    return (
        <>
            <h1>Hello, Next.js!</h1>;
            <Link href={'/b'}>B</Link>
        </>
    )
}