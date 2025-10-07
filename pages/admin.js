import React from 'react'
import AdminControl from '../components/AdminControl'
import FeatureList from '../components/FeatureList'
import { availableFeatures } from '../config/features'

export default function AdminPage() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">لوحة التحكم</h2>
      <AdminControl />
      <div className="mt-6">
        <FeatureList features={availableFeatures} />
      </div>
    </div>
  )
}
