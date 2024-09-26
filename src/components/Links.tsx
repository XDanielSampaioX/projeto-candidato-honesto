import Link from "next/link"

type LinkHrefType = {
    link : string
    imgBase64: string
    className: string
}

export default function Links(props : LinkHrefType) {
    return (
        <a href={props.link} className={`${props.className} text-white rounded-full p-1`} target='_blank'>
            <Link href={props.imgBase64} />
        </a>
    )
}