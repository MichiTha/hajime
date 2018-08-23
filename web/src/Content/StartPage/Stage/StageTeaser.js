import React, { Component } from 'react';
import { extractTitleImage } from '../../../Utils/post';
import { Link } from 'react-router-dom';

const Image = ({ src }) => (
	<div
		style={{
			width: '100%',
			height: '70vh',
			overflow: 'hidden'
		}}
	>
		<img
			src={src}
			style={{
				minWidth: '100%',
				minHeight: '70vh'
			}}
		/>
	</div>
);

type Props = {
	stagePost: {
		id: string,
		title: string,
		titleImage: string,
		content: string
	}
};

class StageTeaser extends Component<Props, void> {
	render() {
		const { stagePost } = this.props;
		const { id, title, titleImage, content } = stagePost || {};
		return (
			<Link to={`post/${id}`}>
				<div className="stageTeaserContainer">
					<p>{title}</p>
					{titleImage && <Image src={titleImage} />}
				</div>{' '}
			</Link>
		);
	}
}

export default StageTeaser;
