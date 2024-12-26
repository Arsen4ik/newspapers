import { createLazyFileRoute } from '@tanstack/react-router'
import NewsPage from '../../pages/NewsPage'

export const Route = createLazyFileRoute('/news/')({
  component: NewsPage,
})
