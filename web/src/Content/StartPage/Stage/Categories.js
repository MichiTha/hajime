import React, { Component } from 'react';
import { Card, Tag } from 'antd';

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
			<Card
				style={{
					borderRadius: '20px',
					margin: '5px',
					boxShadow: '0 2px 4px 0 rgba(0,0,0,.5)',
					height: 'calc(35vh - 382px * 0.35)'
				}}
				title="Schlagwörter"
			>
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
			</Card>
		);
	}
}

export default Categories;
