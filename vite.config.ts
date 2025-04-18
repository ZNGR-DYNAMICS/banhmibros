import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        plugins: [react()],
        build: {
            outDir: '_dist'
        },
        define: {
            'process.env': env
        },
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './tests/setupTests.ts',
            include: ['**/*.test.{ts,tsx}']
        }
    }
})