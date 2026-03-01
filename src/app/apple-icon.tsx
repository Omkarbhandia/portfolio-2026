import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 180,
    height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 84,
                    background: '#050505',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: 40,
                    border: '4px solid white',
                }}
            >
                <div
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        border: '12px solid white',
                    }}
                />
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
