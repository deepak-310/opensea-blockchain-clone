import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'si2d2dvf',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skRjf8AzWk91i1Lu3pvkzGy7iDimvI6VbEwMUOQB4gTL82C3jq9fapUAdY2HPWnw5M8kSBDg4O0FEc2JfvwV1Ne1Zslj0vdp1AYugjTWVuFo1yaSYCudnomLSqwhgqPsbgFJ1xrEs8njepZGl1lxIOn9OBBUGs6Yv8O9PIbQ8bdscGX37moF',
  useCdn: false,
})