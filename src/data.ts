export type Mode = "designer" | "developer"
export type Project = {
  slug: string
  number: string
  name: string
  category: string
  listingCategory?: string
  description: string
  year: string
  role: string
  tone: string
  design: string
  development: string
}

export const projects: Project[] = [
  {
    slug: "optm",
    number: "01",
    name: "Bloganiac",
    category: "Product Design / UI·UX",
    listingCategory: "Product Design / UI·UX\u00a0\u00a0",
    description:
      "Designing a calmer, more approachable digital healthcare experience.",
    year: "2024",
    role: "Product designer",
    tone: "lavender",
    design: " accessible UI, prototyping",
    development: "Responsive components, data visualisation",
  },
  {
    slug: "organza",
    number: "02",
    name: "Organza",
    category: "UI·UX / Frontend Development",
    listingCategory: "UI·UX / Frontend Development · ",
    description:
      "Creating a refined shopping experience focused on discovery and visual storytelling.",
    year: "2024",
    role: "Design + frontend",
    tone: "sand",
    design: "Art direction, commerce UX, typography",
    development: "React storefront, responsive image system",
  },
  {
    slug: "sign-it-off",
    number: "03",
    name: "Graphics/Posters",
    category: "Product Design / AI",
    description:
      "Exploring how machine learning can support signature verification through an intuitive interface.",
    year: "2023",
    role: "Product designer",
    tone: "ink",
    design: "Trust patterns, explainable results, flows",
    development: "Model states, API flows, error handling",
  },
  {
    slug: "far-from-home",
    number: "04",
    name: "FarFromHome",
    category: "Product Design / Social Impact",
    description:
      "Exploring ways to connect farmers and buyers through a more accessible marketplace.",
    year: "2023",
    role: "UX + product design",
    tone: "sage",
    design: "Field research framework, service design",
    development: "Marketplace architecture, maps, mobile UI",
  },
  {
    slug: "experiments",
    number: "05",
    name: "Portfolio Experiments",
    category: "Creative Coding / Visual Design",
    description:
      "Small experiments in typography, interaction, layout, and digital storytelling.",
    year: "Ongoing",
    role: "Independent",
    tone: "coral",
    design: "Type studies, motion sketches, compositions",
    development: "CSS experiments, canvas, interaction studies",
  },
]

export const site = {
  email: "snehasharma08012003@gmail.com",
  location: "Based in India ·" ,
  linkedin: "linkedin.com/in/snehehe",
  github: "https://github.com/iamsnehaa",
  resume: "/resume.pdf"
}
