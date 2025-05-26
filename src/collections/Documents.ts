import { CollectionConfig } from 'payload'

export const Documents: CollectionConfig = {
  slug: 'documents',
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
  ],
}
