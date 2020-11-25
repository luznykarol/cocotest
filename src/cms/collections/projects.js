import seo from '@/cms/partials/seo'

const projects = {
  name: 'projects',
  label: 'Projects',
  description: 'Projects content',
  folder: 'content/projects',
  slug: '{{slug}}',
  templateKey: 'Project',
  create: true,
  fields: [
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'project',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: '',
    },
    {
      label: 'Cover',
      name: 'cover',
      widget: 'image',
      default: '',
      required: false,
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      default: '',
      required: false,
    },
    {
      label: 'Order',
      name: 'order',
      widget: 'number',
      default: '',
      required: false,
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
      default: '',
      required: false,
    },
    seo,
  ],
}

export default projects
