import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        css: true,
        reporters: ['verbose'],
        coverage: {
            reporter: ['text', 'json', 'html'],
            include: ['/src/**/*'],
            exclude: [],
        }
    }
})
