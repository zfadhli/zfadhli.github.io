import Image from 'next/image'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LocalImage({ src, alt, className }) {
  return (
    <figure
      className={cn(`relative w-full h-full overflow-hidden [break-inside: avoid]`, `${className}`)}
    >
      <Image
        src={src}
        alt={alt}
        layout='fill'
        objectFit='cover'
        placeholder='blur'
        blurDataURL={src}
      />
    </figure>
  )
}
