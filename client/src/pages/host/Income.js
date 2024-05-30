import React from 'react'
import { requireAuth } from '../../utils/auth'

export const hostIncomeLoader = async ( {request }) => {
  requireAuth(request);
  return null;
}

export const Income = () => {
  return (
    <div>Income</div>
  )
}
