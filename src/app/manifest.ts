import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Omkar Bhandia | Product Engineer',
        short_name: 'Omkar Bhandia',
        description: 'Senior Web Architect specializing in React, Next.js, and modern bleeding-edge technologies.',
        start_url: '/',
        display: 'standalone',
        background_color: '#050505',
        theme_color: '#0D0D0D',
        icons: [
            {
                src: '/icon.svg',
                sizes: '192x192',
                type: 'image/svg+xml',
            },
            {
                src: '/icon.svg',
                sizes: '512x512',
                type: 'image/svg+xml',
            },
        ],
    }
}
