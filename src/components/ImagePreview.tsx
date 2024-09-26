import Image from "next/image";

type ImagePreviewProps = {
    imageURL: string
}

export default function ImagePreview(props: ImagePreviewProps) {
    return (
        <div className="bg-gray-600 flex justify-center items-center rounded-full w-24 h-24">
            <Image src={props.imageURL} className="w-20 h-20 rounded-full object-cover" alt={"imagem_candidato"} width={100} height={100}></Image>
        </div>
    )
};
