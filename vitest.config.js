import { defineConfig } from "vitest/config"

export default defineConfig({
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
