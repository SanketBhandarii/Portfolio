export interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  github: string
  live: string
  featured: boolean
  stats: {
    stars: number
    forks: number
  }
}

export interface Experience {
  title: string
  company: string
  location: string
  duration: string
  description: string
  technologies: string[]
}

export interface ContactInfo {
  phone: string
  email: string
  social: {
    github: string
    linkedin: string
    twitter: string
  }
}

export interface NavigationSection {
  id: string
  label: string
}
