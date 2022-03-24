module.exports = {
	stories: ['../src/**/*.story.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/preset-create-react-app',
	],
	framework: '@storybook/react',
	core: {
		builder: 'webpack5',
	},
}
