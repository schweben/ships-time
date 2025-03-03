import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default() => {
    return defineConfig({
        base: '/',
        plugins: [react()],
        test: {
            globals: true,
            environment: 'jsdom',
            css: true,
            reporters: ['verbose'],
            coverage: {
                reporter: ['text', 'json', 'html'],
                include: ['/src/**/*'],
                exclude: [],
            }
        }
    });
}
