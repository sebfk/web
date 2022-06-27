import { Plugins } from 'plugins'
import React from 'react'
import { FoxIcon } from 'components/Icons/FoxIcon'
import { FoxyAprProvider } from 'context/FoxyAprProvider/FoxyAprProvider'

const FoxProvider = React.lazy(() =>
  import('./provider').then(module => ({ default: module.FoxProvider })),
)

const FoxPage = React.lazy(() => import('./foxPage').then(module => ({ default: module.FoxPage })))

export function register(): Plugins {
  return [
    [
      'foxPage',
      {
        name: 'foxPage',
        icon: <FoxIcon />,
        routes: [
          {
            href: '/fox',
            path: '/fox/(fox|foxy)?',
            label: 'navBar.foxToken',
            main: () => (
              <React.Suspense fallback={null}>
                <FoxProvider>
                  <FoxyAprProvider>
                    <FoxPage />
                  </FoxyAprProvider>
                </FoxProvider>
              </React.Suspense>
            ),
            icon: <FoxIcon />,
          },
        ],
      },
    ],
  ]
}
