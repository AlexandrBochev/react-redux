// Types
export interface ButtonProps {
  children: React.ReactNode
  linck: string
}

export interface InfoBlockProps {
  title?: string
  body?: string
  phone?: string
  email?: string
  website?: string
  url?: string
}

export interface DataType {
  id: number
  name: string
  title: string
  body: string
  email: string
  phone: string
  website: string
  url: string
}

// Constants
export const navigation = [
  { name: 'Photos', href: '/' },
  { name: 'Posts', href: '/posts' },
  { name: 'Comments', href: '/comments' },
  { name: 'Users', href: '/users' },
]

export const BASE_URL = 'https://jsonplaceholder.typicode.com'