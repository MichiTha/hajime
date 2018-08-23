import React, { Component } from 'react';
import { extractTitleImage } from '../../../Utils/post';
import { Link } from 'react-router-dom';

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
				<div
					className="stageTeaserContainer"
					style={{
						backgroundImage: `url(${titleImage})`,
						backgroundPosition: 'center top',
						backgroundSize: 'cover',
						height: '70vh'
					}}
				>
					<h1 className="stageTeaserTitle">{title}</h1>
				</div>
			</Link>
		);
	}
}

export default StageTeaser;
