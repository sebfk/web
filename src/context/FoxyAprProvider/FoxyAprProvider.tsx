import { useEffect, useMemo, useState } from 'react'

import { FoxyAprContext } from './FoxyAprContext'
import { getFoxyApr } from './getFoxyApr'

export const FoxyAprProvider = ({ children }: { children: React.ReactNode }) => {
  const [foxyApr, setFoxyApr] = useState<string | null>(null)
  useEffect(() => {
    ;(async () => {
      setFoxyApr(await getFoxyApr())
    })()
  }, [])

  const value = useMemo(
    () => ({
      foxyApr,
    }),
    [foxyApr],
  )
  return <FoxyAprContext.Provider value={value}>{children}</FoxyAprContext.Provider>
}
