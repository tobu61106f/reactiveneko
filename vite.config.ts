import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
    base: process.env.BASE_PATH ?? '/',
    plugins: [
        react({
            babel: {
                plugins: ['styled-jsx/babel'],
            },
        }),
        imagetools(),
    ],
})
