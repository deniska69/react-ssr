/** Это основное приложение Node.js, которое инициализирует сервер, обрабатывает маршруты с помощью Express и реализует React SSR */

import path from 'node:path';
import express, { type Request, type Response } from 'express';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import App from './App';

const app = express(); // Create Express App
const port = 3000; // Port to listen
const workspace = process.cwd(); // workspace

// Serve static files like js bundles and css files
app.use('/static', express.static(path.join(workspace, 'dist', 'static')));

// Server files from the /public folder
app.use(express.static(path.join(workspace, 'public')));

// Fallback to render the SSR react app
app.use((request: Request, response: Response) => {
	// React SSR rendering as a stream

	const { pipe } = renderToPipeableStream(
		<html lang="ru">
			<head>
				<meta charSet="UTF-8" />
				<link rel="stylesheet" href={`/static/style.css`} />
			</head>
			<body>
				<base href="/" />
				<div id="app">
					<StaticRouter location={request.url}>
						<App />
					</StaticRouter>
				</div>
			</body>
		</html>,
		{
			bootstrapModules: [`/static/index.js`], // Load script as modules
			onShellReady() {
				response.setHeader('content-type', 'text/html');
				pipe(response);
			},
		},
	);
});

// Start server
app.listen(port, () => console.log(`[app] listening on port ${port}`));
