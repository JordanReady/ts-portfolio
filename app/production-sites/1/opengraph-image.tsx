import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Junior Web Masters";
export const size = {
  width: 1200,
  height: 630,
};
export const image =
  "https://opengraph.b-cdn.net/production/documents/9eca3e03-64a4-48be-8f18-b8e0ba50c2f9.png?token=_Bt9wybFzlwZaAUIb-qDAjbT67CC1Clqcjjo8Gbzauw&height=630&width=1200&expires=33244287790";

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
