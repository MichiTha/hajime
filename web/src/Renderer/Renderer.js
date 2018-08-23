import './Renderer.css';

import React from 'react';
import { Spin } from 'antd';

const Renderer = transform => render => ({ loading, error, data }) => {
	if (loading) {
		return (
			<div className="loadingSpinner">
				<Spin size="large" />
			</div>
		);
	} else if (error) {
		return null;
	} else {
		if (transform) {
			const transformedData = transform(data);
			return render(transformedData);
		} else {
			return render(data);
		}
	}
};

export default Renderer;
