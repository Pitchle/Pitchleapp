import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'mdlr3p0x', // your project ID
    dataset: 'production', // dataset name
    useCdn: true, // `false` if you want to ensure fresh data
})
