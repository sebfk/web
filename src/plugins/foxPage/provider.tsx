import React, { useEffect, useMemo, useState } from 'react'

import { FoxPageContext } from './context'
import { getFarmingApr } from './utils/getFarmingApr'
import { getGovernanceData, ParsedBoardroomGovernanceResult } from './utils/getGovernanceData'
import { getLpApr } from './utils/getLpApr'

export const FoxProvider = React.memo(({ children }: { children: React.ReactNode }) => {
  const [lpApr, setLpApr] = useState<string | null>(null)
  const [farmingApr, setFarmingApr] = useState<string | null>(null)
  const [governanceData, setGovernanceData] = useState<ParsedBoardroomGovernanceResult[] | null>(
    null,
  )

  useEffect(() => {
    Promise.all([getLpApr(), getFarmingApr(), getGovernanceData()]).then(
      ([lpApr, farmingApr, governanceData]) => {
        setLpApr(lpApr)
        setFarmingApr(farmingApr)
        setGovernanceData(governanceData)
      },
    )
  }, [])

  const value = useMemo(
    () => ({
      lpApr,
      farmingApr,
      governanceData,
    }),
    [lpApr, farmingApr, governanceData],
  )
  return <FoxPageContext.Provider value={value}>{children}</FoxPageContext.Provider>
})
