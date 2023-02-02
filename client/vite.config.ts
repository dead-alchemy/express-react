import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

//const path = require("path");

// https://vitejs.dev/config/
export default ({mode}) => {
	const env = loadEnv(mode, "../");
	return defineConfig({
		envDir: "../",
		plugins: [react(), tsconfigPaths()],
		server: {
			port: +env.VITE_PORT,
		},
		define: {
			BASE_API: JSON.stringify(env.VITE_API_URL),
		},
	});
};
