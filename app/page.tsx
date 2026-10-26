'use client'
import { useState } from 'react'
import Link from 'next/link'

const categories = [
  { id: 'vegetables', name_si: 'එළවළු සහ පළතුරු', name_en: 'Vegetables & Fruits', icon: '🥬', count: 2340 },
  { id: 'grains', name_si: 'වී සහ ධාන්‍ය', name_en: 'Rice & Grains', icon: '🌾', count: 1120 },
  { id: 'seeds', name_si: 'බීජ, පොහොර', name_en: 'Seeds, Fertilizers', icon: '🌱', count: 890 },
  { id: 'spices', name_si: 'තේ, පොල්, කුළුබඩු', name_en: 'Tea, Coconut, Spices', icon: '🍃', count: 1540 },
  { id: 'others', name_si: 'අනෙකුත්', name_en: 'Others', icon: '🐓', count: 320 },
]

export default function Home() {
  const [lang, setLang] = useState<'si' | 'en'>('si')
  const [search, setSearch] = useState('')

  return (
    <main className="min-h-screen bg-[#FAFAF7]">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <div>
              <h1 className="font-bold text-lg text-green-700">Agro Market</h1>
              <p className="text-xs text-gray-500">Sri Lanka</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button onClick={() => setLang('si')} className={`px-3 py-1 rounded text-sm ${lang === 'si' ? 'bg-green-600 text-white' : 'text-gray-600'}`}>SI</button>
              <button onClick={() => setLang('en')} className={`px-3 py-1 rounded text-sm ${lang === 'en' ? 'bg-green-600 text-white' : 'text-gray-600'}`}>EN</button>
            </div>
            <Link href="/post-ad" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700">
              + {lang === 'si' ? 'දැන්වීමක් පළ කරන්න' : 'Post Ad'}
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {lang === 'si' ? 'ගොවියාගේ සිට පාරිභෝගිකයාට සෘජුවම' : 'Direct from Farmer to Consumer'}
          </h2>
          <div className="max-w-2xl mx-auto flex gap-2 mt-6">
            <input
              type="text"
              placeholder={lang === 'si' ? 'එළවළු, වී, පොහොර සොයන්න' : 'Search vegetables, rice, fertilizer...'}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
            />
            <Link href={`/browse?q=${search}`} className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700">
              {lang === 'si' ? 'සොයන්න' : 'Search'}
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">15,000+ {lang === 'si' ? 'ගොවීන්' : 'Farmers'} | 8,500+ {lang === 'si' ? 'දැන්වීම්' : 'Ads'}</p>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6">{lang === 'si' ? 'කාණ්ඩ' : 'Categories'}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/browse?cat=${cat.id}`} className="bg-white p-6 rounded-2xl border hover:shadow-lg transition-all text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h4 className="font-medium text-sm text-gray-900">{lang === 'si' ? cat.name_si : cat.name_en}</h4>
                <p className="text-xs text-gray-500 mt-1">{cat.count.toLocaleString()} ads</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-2xl border">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-3">🌱</div>
            <h4 className="font-bold mb-2">{lang === 'si' ? 'සෘජු ගනුදෙනු' : 'Direct Deals'}</h4>
            <p className="text-sm text-gray-600">{lang === 'si' ? 'අතරමැදියන් නැතුව ගොවියාගෙන්ම' : 'Buy directly from farmers'}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">📍</div>
            <h4 className="font-bold mb-2">{lang === 'si' ? 'දිවයින පුරා' : 'Island-wide'}</h4>
            <p className="text-sm text-gray-600">{lang === 'si' ? 'ලංකාව පුරාම' : 'Across Sri Lanka'}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border">
            <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center mb-3">💬</div>
            <h4 className="font-bold mb-2">{lang === 'si' ? 'පහසු සම්බන්ධතා' : 'Easy Contact'}</h4>
            <p className="text-sm text-gray-600">{lang === 'si' ? 'දුරකථන, WhatsApp හරහා' : 'Via phone, WhatsApp'}</p>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>© 2024 Agro Market - Sri Lanka</p>
        </div>
      </footer>
    </main>
  )
}
