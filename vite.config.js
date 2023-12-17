import { defineConfig } from 'vite';
import copy from '@guanghechen/rollup-plugin-copy';
import del from 'rollup-plugin-delete'
import react from '@vitejs/plugin-react';
//import webWorkerLoader from 'rollup-plugin-web-worker-loader';

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    //Add build if you are going to use a Git-based (GitHub or CodeCommit) deployment
    build: {
        commonjsOptions: { include: [] },
        outDir: "build",
        rollupOptions: {
            plugins: [
                // Deletes previous assets
                del({ targets: './src/www/assets/*' }),
                // Copy outputs to templates and www dirs
                copy({
                    hook: 'writeBundle',
                    targets: [
                        { src: [ './dist/index.html' ], dest: 'src/templates' },
                        { src: [ './dist/assets' ], dest: 'src/www/' },
                        { src: [ './public/*' ], dest: 'src/www/' }
                    ]
                })
            ]
        }
    },
    external: [
        '@aws-amplify/analytics', '@aws-amplify/api', '@aws-amplify/auth', '@aws-amplify/core', '@aws-amplify/interactions', '@aws-amplify/storage', '@aws-amplify/ui', '@aws-amplify/xr',
        'aws_amplify', 'aws_amplify_react', 'aws_amplify_core',
        'Buffer', 'CustomEvent', 'HTMLWidgets', 'react', 'Shiny', 'shiny', 'shinyjs'
    ],
    optimizeDeps: {
        disabled: false,
    },
    plugins: [
        // // Run before react() or svelte()
        // copy({
        //     hook: 'buildStart',
        //     targets: [
        //         { src: [ './node_modules/aws-amplify/dist/aws-*' ], dest: 'public/' }
        //     ]
        // }),

        react({
            jsxRuntime: 'classic'
        }),

        //webWorkerLoader(/* configuration */),
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
