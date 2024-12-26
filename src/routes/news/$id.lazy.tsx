import { createLazyFileRoute } from '@tanstack/react-router'
import NewsIDPage from '../../pages/NewsIDPage'

export const Route = createLazyFileRoute('/news/$id')({
  component: NewsIDPage,
})