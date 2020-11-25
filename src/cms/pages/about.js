import seo from "@/cms/partials/seo"

const aboutPage = {
  file: "content/pages/about.md",
  label: "About",
  name: "About",
  fields: [
    {
      label: "Layout",
      name: "layout",
      widget: "hidden",
      default: "about",
    },
    {
      label: "Type",
      name: "type",
      widget: "hidden",
      default: "page",
    },
    {
      label: "Title",
      name: "title",
      widget: "string",
      default: "",
      required: false,
    },
    {
      label: "Herobackground",
      name: "herobackground",
      widget: "image",
      default: "",
      required: false,
    },
    {
      label: "Weddings",
      name: "weddings",
      widget: "markdown",
      default: "",
      required: false,
    },
    {
      label: "Scenarios",
      name: "scenarios",
      widget: "markdown",
      default: "",
      required: false,
    },
    {
      label: "Eventsimg",
      name: "eventsimg",
      widget: "image",
      default: "",
      required: false,
    },
    {
      label: "Events",
      name: "events",
      widget: "markdown",
      default: "",
      required: false,
    },
    {
      label: "Workshops",
      name: "workshops",
      widget: "markdown",
      default: "",
      required: false,
    },
    {
      label: "Workshopsright",
      name: "workshopsright",
      widget: "markdown",
      default: "",
      required: false,
    },
    {
      label: "Consultancy",
      name: "consultancy",
      widget: "markdown",
      default: "",
      required: false,
    },
    {
      label: "Consultancyright",
      name: "consultancyright",
      widget: "markdown",
      default: "",
      required: false,
    },
    {
      label: "Consultancyimg",
      name: "consultancyimg",
      widget: "image",
      default: "",
      required: false,
    },
    {
      label: "Consultancybar",
      name: "consultancybar",
      widget: "markdown",
      default: "",
      required: false,
    },
    seo,
  ],
}

export default aboutPage
