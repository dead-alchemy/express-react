import {useState} from "react";
import {
	Box,
	Center,
	Link,
	Image,
	Button,
	Text,
	Heading,
} from "@chakra-ui/react";

import reactLogo from "assets/react.svg";

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<Box maxWidth={"1280px"} my={0} mx={"auto"} textAlign="center">
			<Center>
				<Link href="https://vitejs.dev" target="_blank">
					<Image
						src="/vite.svg"
						height={"6em"}
						p={"1.5em"}
						alt="Vite logo"
					/>
				</Link>
				<Link href="https://reactjs.org" target="_blank">
					<Image
						src={reactLogo}
						height={"6em"}
						p={"1.5em"}
						filter={"drop-shadow(0 0 2em blue.800);"}
						alt="React logo"
					/>
				</Link>
			</Center>
			<Heading as={"h1"}>Vite + React</Heading>
			<Box p={2}>
				<Button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</Button>
				<Text>
					Edit <code>src/App.tsx</code> and save to test HMR
				</Text>
			</Box>
			<Text color={"gray.500"}>
				Click on the Vite and React logos to learn more
			</Text>
		</Box>
	);
};

export default App;
