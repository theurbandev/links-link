import Image from "next/image";

interface PropsInterface {
    url: string;
    logo: string;
    text: string;
}

export default function Link(props: PropsInterface) {
    const { url, logo, text } = props;
    return (
        <a href={url} target="_blank" className="w-full text-center">
            <div className="flex flex-row justify-center align-middle space-y-4 rounded-large border-2 p-5 gap-4">
                {logo ? (
                    <Image
                        style={{ margin: 0 }}
                        src={"../" + logo + ".svg"}
                        alt="Vercel Logo"
                        width={25}
                        height={25}
                        priority
                    />
                ) : null}
                <div style={{ margin: 0 }}>{text}</div>
            </div>
        </a>
    );
}
