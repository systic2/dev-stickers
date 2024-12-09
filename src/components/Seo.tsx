import React from "react";

interface ISeoProps {
  title: any;
}

export default function Seo({ title }: ISeoProps) {
  return <title>{title} | DevStickers!</title>;
}
