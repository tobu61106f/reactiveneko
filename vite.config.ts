import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
    base: '',
    plugins: [react({
        babel: {
            plugins: ['styled-jsx/babel'],
        },
    }), imagetools(), cloudflare()],
})