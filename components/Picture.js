import Image from 'next/image'

export default function Photo(props) {
  return (
    <Image
      src={props.src}
      alt="portrait"
      width={props.width ? props.width : props.size}
      height={props.height ? props.height : props.size}
      loading="lazy"
    />
  );
}
