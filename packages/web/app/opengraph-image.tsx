import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "vono";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		<div
			style={{
				fontSize: 128,
				background: "#ff69b4",
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "#fef085",
				fontWeight: 700,
			}}
		>
			vono
		</div>,
		{
			...size,
		},
	);
}
