import React from "react";
import ReactDOM from "react-dom/client";

import {ChakraProvider} from "@chakra-ui/react";
import {RouterProvider} from "react-router-dom";

import {ReactQueryDevtools} from "react-query/devtools";

import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

import {router} from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<QueryClientProvider client={queryClient}>
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
);
