import Link from "./components/link";

export default function Home() {
    interface LinkItem {
        url: string;
        logo?: string;
    }

    const links: { [key: string]: LinkItem } = {
        website: {
            url: "https://theurbandev.vercel.app",
        },
        github: {
            url: "https://github.com/theurbandev",
            logo: "github-mark-white",
        },
        twitter: {
            url: "https://twitter.com/theurbandev",
            logo: "twitter-logo",
        },
    };

    return (
        <>
            <section>
                <h1 className="text-6xl font-extrabold px-10 pt-10">MATT</h1>
                <h3 className="text-xs font-semibold px-10 py-1">@THEURBANDEV</h3>
            </section>

            <main className="flex flex-col min-h-screen items-center">
                <div className="grid gap-4 grid-cols-1 w-full p-24 max-w-screen-sm justify-center">
                    <p className="text-center pb-10">everything you're looking for.</p>
                    {Object.keys(links).map((key: any) => (
                        <Link key={key} url={links[key].url} logo={links[key].logo} text={key} />
                    ))}
                </div>
            </main>
        </>
    );
}
