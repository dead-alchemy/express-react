import React from "react";
import ReactDOM from "react-dom/client";

import {ChakraProvider} from "@chakra-ui/react";
import {RouterProvider} from "react-router-dom";

import {ReactQueryDevtools} from "react-query/devtools";

import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

import Router from "./routes";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<QueryClientProvider client={queryClient}>
		<ChakraProvider>
			<Router />
		</ChakraProvider>
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
);
