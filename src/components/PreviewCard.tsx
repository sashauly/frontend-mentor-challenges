import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  pageUrl: string;
};

export default function PreviewCard({
  title,
  description,
  imageUrl,
  pageUrl,
}: Props) {
  return (
    <Link href={pageUrl}>
      <div className="flex flex-col items-center justify-between  w-full h-full p-2 bg-foreground text-background rounded-xl">
        <div className="relative w-full h-full flex items-start justify-center overflow-hidden max-w-52 max-h-40">
          <Image
            src={imageUrl}
            alt={title}
            width={208}
            height={128}
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="justify-self-end">
          <h1 className="text-center text-2xl font-bold">{title}</h1>
          <p className="text-center text-xl">{description}</p>
        </div>
      </div>
    </Link>
  );
}
