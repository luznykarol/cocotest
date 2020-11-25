const footer = {
  file: "content/partials/footer.md",
  label: "Footer",
  name: "footer",
  fields: [
    {
      label: "Heading",
      name: "heading",
      widget: "string",
    },
    {
      label: "Contact",
      name: "contact",
      widget: "object",
      fields: [
        {
          label: "Image",
          name: "image",
          widget: "file",
          required: false,
        },
        {
          label: "Text",
          name: "text",
          widget: "string",
          required: false,
        },
        {
          label: "Mail",
          name: "mail",
          widget: "string",
          required: false,
        },
        {
          label: "Phone",
          name: "phone",
          widget: "string",
          required: false,
        },
      ],
    },
    {
      label: "Socials",
      name: "socials",
      widget: "markdown",
    },
  ],
}

export default footer
