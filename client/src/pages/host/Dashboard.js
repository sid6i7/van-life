import React from 'react'
import { requireAuth } from '../../utils/auth'

export const dashboardLoader = async ({ request }) => {
  requireAuth(request);
  return null;
}

export const Dashboard = () => {
  return (
    <div>
        Dashboard
    </div>    
  )
}
