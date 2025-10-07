import { useRouter } from 'next/router'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">منصة المعرفة</h1>
      <p className="mb-4">ابدأ رحلتك في تعلم اللغة العربية</p>
      <button
        onClick={() => router.push('/login')}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        تسجيل الدخول
      </button>
    </div>
  )
}
