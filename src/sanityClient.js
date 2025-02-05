import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Initialize Sanity Client
export const client = sanityClient({
    projectId: 'mdlr3p0x', // Your Sanity project ID
    dataset: 'production',  // Your dataset
    useCdn: true,
    apiVersion: '2023-01-01', // Update to latest version
})

// Create Image URL Builder
const builder = imageUrlBuilder(client)

// Function to generate image URLs
export const urlFor = (source) => {
    return builder.image(source).auto('format').fit('max') // Ensures cropped images are applied
}
