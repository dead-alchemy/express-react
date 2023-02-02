import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default ({mode}) => {
	const env = loadEnv(mode, "../");
	return defineConfig({
		envDir: "../",
		plugins: [react()],
		server: {
			port: +env.VITE_PORT,
		},
	});
};
