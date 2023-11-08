import Link from "./components/link";

export default function Home() {
    interface LinkItem {
        url: string;
        logo?: any;
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
        linkedin: {
            url: "https://www.linkedin.com/in/matthew-joseph-1456a21a7/",
            logo: "linkedin",
        },
    };

    return (
        <>
            <section>
                <h1 className="text-6xl font-extrabold px-10 pt-10 text-white">MATT</h1>
                <h3 className="text-xs font-semibold px-10 py-1 text-white">@THEURBANDEV</h3>
            </section>

            <main className="flex flex-col min-h-screen items-center">
                <div className="grid gap-4 grid-cols-1 w-full pl-14 pr-14 max-w-screen-md justify-center">
                    <p className="text-center pb-10 pt-20">everything you{"'"}re looking for.</p>
                    {Object.keys(links).map((key: any) => (
                        <Link key={key} url={links[key].url} logo={links[key].logo} text={key} />
                    ))}
                </div>
            </main>
        </>
    );
}
