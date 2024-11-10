import parse from "html-react-parser";
import Image from "next/image";
import React from "react";

type ConvertBodyProps = {
  contentHTML: string;
};

export default function ConvertBody({ contentHTML }: ConvertBodyProps) {
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      if (node.type === "tag" && node.name === "img") {
        const { src, alt, width, height } = node.attribs;
        return (
          <Image
            layout="responsive"
            src={src}
            alt={alt}
            width={parseInt(width, 10)}
            height={parseInt(height, 10)}
            sizes="(min-width: 768px) 768px, 100vw"
          />
        );
      }
    },
  });
  return <>{contentReact}</>;
}
