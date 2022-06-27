import React from 'react'

export type FoxyAprContextData = {
  foxyApr: string | null
}
export const FoxyAprContext = React.createContext<FoxyAprContextData | null>(null)
