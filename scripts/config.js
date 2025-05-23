/** Этот файл содержит базовую конфигурацию для клиентского и серверного комплекта */

import path from 'node:path';
import tailwindcss from '@tailwindcss/postcss';

import postcssPlugin from './plugins/postcss.js';

// Working dir
const workspace = process.cwd();

// Server bundle configuration
export const serverConfig = {
	bundle: true,
	platform: 'node',
	format: 'esm', // Support esm packages
	packages: 'external', // Omit node packages from our node bundle
	logLevel: 'error',
	sourcemap: 'external',
	entryPoints: {
		main: path.join(workspace, 'src', 'main.tsx'), // Express app
	},
	tsconfig: path.join(workspace, 'tsconfig.json'),
	outdir: path.join(workspace, 'dist'),
};

// Client bundle configuration
export const clientConfig = {
	bundle: true,
	platform: 'browser',
	format: 'esm',
	sourcemap: 'external',
	logLevel: 'error',
	tsconfig: path.join(workspace, 'tsconfig.json'),
	entryPoints: {
		index: path.join(workspace, 'src', 'index.tsx'), // Client react app
		style: path.join(workspace, 'src', 'index.css'), // Stylesheet
	},
	outdir: path.join(workspace, 'dist', 'static'), // Served as /static by express,
	plugins: [
		postcssPlugin({
			plugins: [tailwindcss],
		}),
	],
};
