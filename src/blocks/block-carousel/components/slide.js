/**
 * Tab Wrapper
 */

// Setup the block
const { Component } = wp.element;

const { Path, SVG } = wp.components;
const { __ } = wp.i18n;

const { InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks;

// Import block dependencies and components
import classnames from "classnames";

/**
 * Create a Tab wrapper Component
 */
export default class Tab extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		// eslint-disable-next-line no-unused-vars
		let { className = "" } = this.props;

		className = classnames(className, "c9-carousel-slide");

		return (
			<div className={className}>
				<InnerBlocks
					templateLock={false}
					templateInsertUpdatesSelection={false}
				/>
			</div>
		);
	}
}

registerBlockType("c9-blocks/carousel-slide", {
	title: __("C9 Carousel Slide", "c9-blocks"),

	category: "common",

	parent: ["c9-blocks/carousel"],

	icon: (
		<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<Path fill="none" d="M0 0h24v24H0V0z" />
			<Path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z" />
		</SVG>
	),

	description: __("A single tab within the tabs block."),

	supports: {
		inserter: false,
		className: false
	},

	attributes: {
		slideActive: {
			type: "string"
		}
	},

	edit: Tab,

	save: function(props) {
		const { slideActive } = props.attributes;
		let { className = "" } = props;

		className = classnames(
			className,
			"c9-carousel-slide",
			"carousel-item",
			slideActive ? "active" : null
		);

		return (
			<div className={className}>
				<InnerBlocks.Content />
			</div>
		);
	}
});
