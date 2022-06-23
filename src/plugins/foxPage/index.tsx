import { Plugins } from 'plugins'
import { FoxIcon } from 'components/Icons/FoxIcon'

import { FoxPage } from './foxPage'
import { FoxPageProvider } from './provider'

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
              <FoxPageProvider>
                <FoxPage />
              </FoxPageProvider>
            ),
            icon: <FoxIcon />,
          },
        ],
      },
    ],
  ]
}
