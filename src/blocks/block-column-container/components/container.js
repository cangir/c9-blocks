/**
 * Container Wrapper
 */

// Setup the block
const { Component } = wp.element;

// Import block dependencies and components
import classnames from "classnames";
import VideoBox from "./video-box";

/**
 * Create a Container wrapper Component
 */
export default class Container extends Component {
	constructor() {
		super(...arguments);
	}

	c9SpacingConfig(padding, margin) {
		let classes = [];
		// abstract side class assignment
		function assignSideClasses(sideClass, level) {
			if (level != -1) {
				classes.push(`${sideClass}-${level}`);
			}
		}

		// padding
		if (
			padding.top === padding.left &&
			padding.top === padding.bottom &&
			padding.top === padding.right &&
			padding.top != -1
		) {
			classes.push(`p-${padding.top}`);
		} else if (padding.top === padding.bottom && padding.top >= 0) {
			classes.push(`py-${padding.top}`);
			assignSideClasses("pl", padding.left);
			assignSideClasses("pr", padding.right);
		} else if (padding.left === padding.right && padding.left >= 0) {
			classes.push(`px-${padding.left}`);
			assignSideClasses("pt", padding.top);
			assignSideClasses("pb", padding.bottom);
		} else {
			["top", "bottom", "left", "right"].map(s =>
				assignSideClasses(`p${s[0]}`, padding[s])
			);
		}

		// margin
		if (margin.top === margin.bottom && margin.top != -1) {
			classes.push(`my-${margin.top}`);
		} else {
			["top", "bottom"].map(s => assignSideClasses(`m${s[0]}`, margin[s]));
		}

		return classes;
	}

	c9BackgroundStyles(
		url,
		size,
		bgX,
		bgY,
		repeat,
		hue,
		opacity,
		blend,
		height,
		focalPoint,
		selected = true
	) {
		const styles = {};

		if (height) {
			styles.minHeight = `${height}vh`;
		}

		if (focalPoint) {
			styles.backgroundPosition = `${focalPoint.x * 100}% ${focalPoint.y *
				100}%`;
		}

		if (url) {
			if (selected) {
				styles.backgroundImage = `url(${url})`;
			} else {
				styles.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`;
			}
			styles.backgroundRepeat = repeat;
			styles.backgroundBlendMode = `${blend}`;
		}
		if (size.length > 0) {
			styles.backgroundSize = size;
		} else {
			let horizontal =
				bgX.size != "auto" ? `${bgX.size}${bgX.unit}` : `${bgX.size}`;
			let vertical =
				bgY.size != "auto" ? `${bgY.size}${bgY.unit}` : `${bgY.size}`;
			styles.backgroundSize = `${horizontal} ${vertical}`;
		}
		if (hue) {
			styles.backgroundColor = this.hexToRGBA(hue, opacity);
		}

		return styles;
	}

	hexToRGBA(hex, alpha) {
		let r = parseInt(hex.slice(1, 3), 16),
			g = parseInt(hex.slice(3, 5), 16),
			b = parseInt(hex.slice(5, 7), 16);

		var opacity;

		if (alpha === 10) {
			opacity = 1;
		} else {
			opacity = "." + alpha;
		}

		return `rgba(${r},${g},${b},${opacity})`;
	}

	render() {
		const {
			attributes: {
				verticalAlign,
				containerImgURL,
				containerWidth,
				bgImgSize,
				bgImgAttach,
				bgImgRepeat,
				bgCustomX,
				bgCustomY,
				overlayHue,
				overlayOpacity,
				blendMode,
				containerPadding,
				containerMargin,
				minScreenHeight,
				focalPoint,
				containerVideoURL,
				containerVideoID,
				cannotEmbed,
				columns,
				layout,
				columnMaxWidth,
				centerColumns
			},
			isSelectedBlockInRoot
		} = this.props;

		return (
			<div
				className={classnames(
					containerWidth,
					"c9-column-container",
					this.c9SpacingConfig(containerPadding, containerMargin),
					bgImgAttach ? "c9-fixed" : "c9-scroll",
					"c9-layout-columns-" + columns,
					verticalAlign ? "c9-is-vertically-aligned-" + verticalAlign : null,
					layout,
					columnMaxWidth && centerColumns ? "c9-columns-center" : null,
					containerImgURL ? "c9-columns-has-background" : null,
					(!!containerVideoURL || !!containerVideoID) && !cannotEmbed
						? "c9-columns-has-video"
						: null
				)}
				style={this.c9BackgroundStyles(
					containerImgURL,
					bgImgSize,
					bgCustomX,
					bgCustomY,
					bgImgRepeat,
					overlayHue,
					overlayOpacity,
					blendMode,
					minScreenHeight,
					focalPoint,
					isSelectedBlockInRoot
				)}
			>
				{(!!containerVideoURL || !!containerVideoID) && !cannotEmbed && (
					<VideoBox {...this.props} />
				)}
				{this.props.children}
			</div>
		);
	}
}
