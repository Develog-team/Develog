
interface DotProps{
	index: number;
	currentIndex: number;
	onClick: (index: number) => void;
}
const Dot = (props: DotProps) => {
    const { index, currentIndex, onClick } = props;

	const selected = index === currentIndex;
	return (
		<div
			style={{
				width: 15,
				height: 15,
				border: "1px solid" + (selected ? "#9672d9" : " rgba(0, 0, 0, 0)"),
				borderRadius: 9999,
				margin: "10px 0",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			onClick={() => onClick(index)}
            aria-hidden="true"
		>
			<div
				style={{
					position: "relative",
					width: 11,
					height: 11,
					borderRadius: 9999,
					backgroundColor: "#9672d9",
					cursor: "pointer",
				}}
			></div>
		</div>
	);
};

interface DotsProps {
	limit: number;
	currentIndex: number;
	onDotClick: (index: number) => void;
}

export const Dots= (props:DotsProps) => {
    const { limit, currentIndex, onDotClick } = props;

	return (
		<div style={{ position: "fixed", top: 0, right: 100, height: "100%" }}>
			<div
				style={{
					position: "fixed",
					top: 65,
					right: 100 + 8,
					height: "100%",
					width: 1
				}}
			></div>
			<div
				style={{
					position: "fixed",
					display: "flex",
					flexDirection: "column",
					height: "100%",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{Array(limit)
					.fill("")
					.map((_, index) => (
						<Dot
                            key={index}
							index={index}
							currentIndex={currentIndex}
							onClick={onDotClick}
						></Dot>
					))}
			</div>
		</div>
	);
};