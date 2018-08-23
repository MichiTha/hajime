export const extractTitleImage = (content: string) => {
	const match = content.match(/data-orig-file="(.+?\.(?:jpg|png|gif))/);
	if (match !== null) {
		const image = match[1];
		return image;
	} else {
		return null;
	}
};

export const removeHTML = (html: string) => {
	const tmp = document.createElement('DIV');
	tmp.innerHTML = html;
	return tmp.textContent || tmp.innerText || '';
};
