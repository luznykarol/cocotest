const project = {
  name: 'Project',
  label: 'Project',
  folder: 'content/projects',
  slug: '{{slug}}',
  create: true,
  fields: [
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'project',
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'Project',
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
      required: false,
    },
    {
      label: 'Text',
      name: 'text',
      widget: 'string',
      required: false,
    },
  ],
}

export default project
