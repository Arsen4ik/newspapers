/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const NewsIndexLazyImport = createFileRoute('/news/')()
const NewsIdLazyImport = createFileRoute('/news/$id')()

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const NewsIndexLazyRoute = NewsIndexLazyImport.update({
  id: '/news/',
  path: '/news/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/news/index.lazy').then((d) => d.Route))

const NewsIdLazyRoute = NewsIdLazyImport.update({
  id: '/news/$id',
  path: '/news/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/news/$id.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/news/$id': {
      id: '/news/$id'
      path: '/news/$id'
      fullPath: '/news/$id'
      preLoaderRoute: typeof NewsIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/news/': {
      id: '/news/'
      path: '/news'
      fullPath: '/news'
      preLoaderRoute: typeof NewsIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/news/$id': typeof NewsIdLazyRoute
  '/news': typeof NewsIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/news/$id': typeof NewsIdLazyRoute
  '/news': typeof NewsIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/news/$id': typeof NewsIdLazyRoute
  '/news/': typeof NewsIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/news/$id' | '/news'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/news/$id' | '/news'
  id: '__root__' | '/' | '/news/$id' | '/news/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  NewsIdLazyRoute: typeof NewsIdLazyRoute
  NewsIndexLazyRoute: typeof NewsIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  NewsIdLazyRoute: NewsIdLazyRoute,
  NewsIndexLazyRoute: NewsIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/news/$id",
        "/news/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/news/$id": {
      "filePath": "news/$id.lazy.tsx"
    },
    "/news/": {
      "filePath": "news/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
