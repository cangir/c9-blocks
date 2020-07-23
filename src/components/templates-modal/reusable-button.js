const { BlockIcon } = wp.blockEditor;
const { withDispatch } = wp.data;

const ReusableButton = ({
	label,
	icon,
	preview,
	section,
	insertBlocks,
	open,
	close,
	mouseIn
}) => {
	return (
		<button
			onClick={() => {
				open();
				setTimeout(() => {
					insertBlocks(section);
					close();
				}, 0);
			}}
			onMouseEnter={() => {
				mouseIn();
			}}
		>
			<BlockIcon icon={icon} />
			<span className="c9-reusable-label">{label}</span>
		</button>
	);
};

export default withDispatch(dispatch => {
	const { insertBlocks } = dispatch("core/block-editor");

	return {
		insertBlocks
	};
})(ReusableButton);
