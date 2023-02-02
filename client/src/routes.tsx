import {App} from "./pages";

import {
	BrowserRouter,
	Route,
	Routes,
	createBrowserRouter,
} from "react-router-dom";

// {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		// errorElement: <ErrorPage />,
	},
]);
