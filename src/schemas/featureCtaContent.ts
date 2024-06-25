import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'featureCtaContent',
  title: 'Feature CTA Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'dotPoints',
      title: 'Dot Points',
      type: 'text',
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'string',
    }),
    defineField({
      name: 'ctaPath',
      title: 'CTA Path',
      type: 'string',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: false,
      },
    }),
  ],
})
