import { ImageResponse } from "next/og";

export const size = {
	width: 32,
	height: 32,
};
export const contentType = "image/png";

// Change this color to control the favicon color
const ICON_COLOR = "#ff69b4";

export default function Icon() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				background: "transparent",
			}}
		>
			<div
				style={{
					width: "100%",
					height: "100%",
					background: ICON_COLOR,
					borderRadius: "15%",
				}}
			/>
		</div>,
		{
			...size,
		},
	);
}
