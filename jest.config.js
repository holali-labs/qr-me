/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testRegex: '(/__tests__/.*|\\.(test))\\.[t]sx?$',
	moduleNameMapper: {
		// Handle module aliases (if you use them in tsconfig)
		'^@/(.*)$': '<rootDir>/$1',

		// Handle CSS imports
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/.next/',
		'<rootDir>/e2e/',
	],
	collectCoverage: true,
	collectCoverageFrom: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'!./src/**/*.d.ts',
		'!./src/pages/_app.tsx',
		'!./src/pages/_document.tsx',
	],
	coverageReporters: ['text', 'lcov', 'html'],
	transform: {
		// Use babel-jest to transpile tests with next/babel preset
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
	},
	transformIgnorePatterns: [
		'/node_modules/',
		'^.+\\.module\\.(css|sass|scss)$',
	],
};
