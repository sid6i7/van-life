import React from 'react'
import { requireAuth } from '../../utils/auth'

export const hostReviewsLoader = async ({ request }) => {
  requireAuth(request);
  return null;
}

export const Reviews = () => {
  return (
    <div>Reviews</div>
  )
}
