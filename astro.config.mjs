import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(),
    // NetlifyCMS({
    //   config: {
    //     backend: {
    //       name: 'git-gateway',
    //       branch: 'main',
    //     },
    //     collections: [
    //       {
    //         name: 'guides',
    //         label: 'Guides',
    //         folder: 'src/content/guides',
    //         create: true,
    //         delete: true,
    //         fields : [
    //           {name: 'title', widget: 'string', label: 'Guide Title'},

    //             {name: 'description', widget: 'string', label: 'Guide Description'},
    //             {name:'order', widget: 'number', label: 'Sort Position'},
    //             {name: 'icon', widget: 'string', label: 'Guide FA Icon'},
    //             {name: 'version', widget: 'string', label: 'version'},
    //             // date: z.date(),
    //             // video: z.string(),
    //             // pdf: z.string()
    //         ]
    //       }
    //     ],
    //   },
    // }),
  ],
  output: 'server'
});