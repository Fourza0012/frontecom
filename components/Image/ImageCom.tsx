import { Image, ImageProps } from "antd";

export default function ImageCom (props : ImageProps) {
    return (
        <Image
            width={props.width}
            height={props.height}
            src={props.src}
            alt={props.alt}
            preview={false}
        />
    )
}