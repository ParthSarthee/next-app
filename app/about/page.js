import Link from "next/link";


function AboutPage() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            About Page
            <Link href="/">Home</Link>
        </div>
    )
}

export default AboutPage;