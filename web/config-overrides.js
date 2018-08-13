const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
	config = injectBabelPlugin(
		['import', { libraryName: 'antd', style: true }],
		config
	); // change importing css to less
	config = rewireLess.withLoaderOptions({
		javascriptEnabled: true,
		modifyVars: {
			'@primary-color': '#2972ff',
			'@secondary-color': '#ffe20d'
		}
	})(config, env);
	return config;
};

// :root {
//   --color-blue: rgb(41, 114, 255);
//   --color-yellow: rgb(255, 226, 13);
// }
