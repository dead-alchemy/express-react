import {App} from "./pages";

import {BrowserRouter, Route, Routes} from "react-router-dom";

// {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
		</Routes>
	</BrowserRouter>
);
export default Router;
