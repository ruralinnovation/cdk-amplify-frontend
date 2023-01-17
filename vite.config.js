import { defineConfig } from 'vite';
import copy from '@guanghechen/rollup-plugin-copy';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            external: [
                '@aws-amplify/analytics', '@aws-amplify/api', '@aws-amplify/auth', '@aws-amplify/core', '@aws-amplify/interactions', '@aws-amplify/storage', '@aws-amplify/ui', '@aws-amplify/xr',
                'aws_amplify', 'aws_amplify_react', 'aws_amplify_core',
                'Buffer', 'CustomEvent', 'HTMLWidgets', 'Shiny', 'shiny', 'shinyjs'
            ],

            // plugins: [
            //     // Copy outputs to templates and www dirs
            //     copy({
            //         hook: 'writeBundle',
            //         targets: [
            //             { src: [ './dist/index.html' ], dest: 'src/templates' },
            //             { src: [ './dist/assets' ], dest: 'src/www/' },
            //             { src: [ './public/*' ], dest: 'src/www/' }
            //         ]
            //     })
            // ]
        }
    },
    plugins: [
        // // Run before react() or svelte()
        // copy({
        //     hook: 'buildStart',
        //     targets: [
        //         { src: [ './node_modules/aws-amplify/dist/aws-*' ], dest: 'public/' }
        //     ]
        // }),

        react(),

        // Copy outputs to templates and www dirs
        copy({
            hook: 'writeBundle',
            targets: [
                { src: [ './dist/index.html' ], dest: 'src/templates' },
                { src: [ './dist/assets' ], dest: 'src/www/' },
                { src: [ './public/*' ], dest: 'src/www/' }
            ]
        }),
    ],
    resolve: {
        alias: [
            // {
            //     find: '@', replacement: resolve(__dirname, './src'),
            // },
            {
                find: './runtimeConfig', replacement: './runtimeConfig.browser',
            }
        ]
    }
});
