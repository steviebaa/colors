module.exports = {
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'tsx', 'js'],
	transform: { '\\.(ts|tsx)$': 'ts-jest' },
	globals: {
		'ts-jest': { compiler: 'ttypescript' },
	},
	setupFiles: ['<rootDir>/config/.jestCanvasMock.ts'],
	testRegex: ['/.*\\.spec\\.(ts|tsx)$'],
};
