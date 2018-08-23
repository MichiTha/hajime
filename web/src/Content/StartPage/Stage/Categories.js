import React, { Component } from 'react';
import { Tag } from 'antd';

type Props = {
	categories: Array<{
		id: string,
		categoryId: number,
		name: string,
		count: number
	}>,
	setCategoryFilter: (Array<number>) => void,
	categoryFilter: Array<number>
};

class Categories extends Component<Props, void> {
	isChecked = (categoryId, categoryFilter) =>
		categoryFilter.indexOf(categoryId) !== -1;

	handleOnChangeTag = (categoryId: string) => {
		const { categories, setCategoryFilter, categoryFilter } = this.props;
		if (categoryFilter.indexOf(categoryId) === -1) {
			setCategoryFilter([...categoryFilter, categoryId]);
		} else {
			setCategoryFilter(categoryFilter.filter(id => id !== categoryId));
		}
	};

	render() {
		const { categories, categoryFilter } = this.props;
		console.log('categoryFilter: ', categoryFilter);
		return (
			<div style={{ height: '35vh' }}>
				<h4 style={{ marginBottom: 16 }}>Schlagwörter:</h4>
				{categories &&
					categories.map(({ name, count, id, categoryId, children }) => {
						const checked = this.isChecked(categoryId, categoryFilter);
						return (
							<Tag
								color={checked ? 'yellow' : 'blue'}
								checked={checked}
								key={id}
								onClick={() => this.handleOnChangeTag(categoryId)}
							>
								{name} {count}
							</Tag>
						);
					})}
			</div>
		);
	}
}

export default Categories;
