import React from 'react'

import { ParsedBoardroomGovernanceResult } from './utils/getGovernanceData'

export type FoxPageContextData = {
  lpApr: string | null
  farmingApr: string | null
  governanceData: ParsedBoardroomGovernanceResult[] | null
}
export const FoxPageContext = React.createContext<FoxPageContextData | null>(null)
