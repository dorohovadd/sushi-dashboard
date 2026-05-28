import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts';
import {
  Sparkles,
  TrendingUp,
  Users,
  Star,
  Heart,
  UtensilsCrossed,
} from 'lucide-react';

export default function SushiDashboard() {
  const popularity = [
    { name: 'Японский домик', value: 124 },
    { name: 'Суши маркет', value: 46 },
    { name: 'Япончик', value: 37 },
    { name: 'Экспресс Суши', value: 25 },
    { name: 'Зебры', value: 24 },
  ];

  const visitGoals = [
    { label: 'С друзьями', value: 177 },
    { label: 'Не готовить', value: 79 },
    { label: 'Попробовать новое', value: 93 },
  ];

  const frequency = [
    { label: '1–2 раза/мес', value: 264 },
    { label: 'Каждый день', value: 29 },
    { label: '3+ раза/мес', value: 56 },
  ];

  const satisfaction = [
    { label: 'Полностью', value: 161 },
    { label: 'Скорее да', value: 157 },
    { label: 'Скорее нет', value: 24 },
    { label: 'Нет', value: 5 },
  ];

  const priceData = [
    { price: '139₽', fair: 10, expensive: 2.5 },
    { price: '189₽', fair: 27.4, expensive: 10.6 },
    { price: '199₽', fair: 32, expensive: 14.9 },
    { price: '249₽', fair: 22.9, expensive: 28.6 },
    { price: '349₽', fair: 7.7, expensive: 43.4 },
  ];

  const COLORS = ['#ff4d6d', '#ffb703', '#06b6d4', '#22c55e', '#8b5cf6'];

  const radarData = [
    { subject: 'Качество', A: 95 },
    { subject: 'Цена', A: 82 },
    { subject: 'Атмосфера', A: 76 },
    { subject: 'Сервис', A: 88 },
    { subject: 'Размер порций', A: 91 },
  ];

  const [activeTab, setActiveTab] = useState('overview');

  const cardStyle =
    'bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] hover:scale-[1.02] transition-all duration-300 hover:border-pink-400/30';

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-950 via-zinc-950 to-orange-950 text-white overflow-hidden relative p-6 md:p-10">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_#ff4d6d,_transparent_30%),radial-gradient(circle_at_bottom_right,_#ffb703,_transparent_30%)]" />

      <div className="absolute top-10 left-10 text-8xl opacity-10 animate-pulse">
        🍣
      </div>
      <div className="absolute top-40 right-20 text-7xl opacity-10 animate-bounce">
        🍜
      </div>
      <div className="absolute bottom-20 left-1/3 text-8xl opacity-10">
        🥢
      </div>

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">

        <div className="flex justify-center flex-wrap gap-4 sticky top-4 z-50">
          {[
            { id: 'overview', label: '📊 Обзор' },
            { id: 'restaurants', label: '🍱 Рестораны' },
            { id: 'clients', label: '😍 Клиенты' },
            { id: 'prices', label: '💸 Цены' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 rounded-2xl backdrop-blur-xl border transition-all duration-300 font-semibold ${
                activeTab === tab.id
                  ? 'bg-pink-500 text-white border-pink-300 shadow-2xl scale-105'
                  : 'bg-white/10 border-white/10 hover:bg-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 py-8"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-pink-500 to-orange-400 p-5 rounded-full shadow-2xl">
              <UtensilsCrossed size={48} />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-pink-300 via-orange-200 to-red-400 bg-clip-text text-transparent">
            Анализ рынка суши-ресторанов
          </h1>

          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
            Интерактивный dashboard по маркетинговому исследованию рынка суши 🍣
          </p>

          <div className="flex justify-center gap-4 pt-4 flex-wrap">
            <div className="px-4 py-2 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-200 text-sm">
              🔥 Молодёжный дизайн
            </div>

            <div className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-200 text-sm">
              📊 Реальная аналитика
            </div>

            <div className="px-4 py-2 rounded-full bg-red-500/20 border border-red-400/30 text-red-200 text-sm">
              ✨ Interactive Dashboard
            </div>
          </div>
        </motion.header>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className={cardStyle}>
            <div className="flex items-center gap-2 mb-2 text-pink-300">
              <TrendingUp size={18} />
              <p className="text-sm">Лидер рынка</p>
            </div>

            <h2 className="text-3xl font-bold mt-2">Японский домик</h2>
            <p className="text-red-300 mt-3">124 постоянных посетителя</p>
          </div>

          <div className={cardStyle}>
            <div className="flex items-center gap-2 mb-2 text-orange-300">
              <Users size={18} />
              <p className="text-sm">Главная причина посещения</p>
            </div>

            <h2 className="text-3xl font-bold mt-2">Встречи с друзьями</h2>
            <p className="text-red-300 mt-3">177 ответов</p>
          </div>

          <div className={cardStyle}>
            <div className="flex items-center gap-2 mb-2 text-red-300">
              <Heart size={18} />
              <p className="text-sm">Основная аудитория</p>
            </div>

            <h2 className="text-3xl font-bold mt-2">18–24 года</h2>
            <p className="text-red-300 mt-3">Молодая аудитория</p>
          </div>

          <div className={cardStyle}>
            <div className="flex items-center gap-2 mb-2 text-yellow-300">
              <Star size={18} />
              <p className="text-sm">Справедливая цена</p>
            </div>

            <h2 className="text-3xl font-bold mt-2">199₽</h2>
            <p className="text-red-300 mt-3">Оптимальная цена роллов</p>
          </div>
        </section>

        {activeTab === 'restaurants' && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={cardStyle}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">
                Популярность ресторанов 🍱
              </h3>
              <Sparkles className="text-pink-300" />
            </div>

            <div className="space-y-5">
              {popularity.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>{item.name}</span>
                    <span>{item.value}</span>
                  </div>

                  <div className="w-full bg-zinc-800 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-400"
                      style={{ width: `${item.value / 1.3}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={cardStyle}>
            <h3 className="text-2xl font-bold mb-6">
              Почему люди любят суши 🍣
            </h3>

            <div className="space-y-5">
              {visitGoals.map((goal) => (
                <div key={goal.label}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>{goal.label}</span>
                    <span>{goal.value}</span>
                  </div>

                  <div className="w-full bg-zinc-800 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-pink-500 to-red-500"
                      style={{ width: `${goal.value / 2}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {activeTab === 'clients' && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={cardStyle}>
            <h3 className="text-2xl font-bold mb-6">
              Как часто ходят в суши-рестораны 📅
            </h3>

            <div className="flex items-end justify-around h-72 gap-6 pt-6">
              {frequency.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center w-full"
                >
                  <div
                    className="w-full rounded-t-3xl bg-gradient-to-t from-red-600 to-orange-400 transition-all duration-500"
                    style={{ height: `${Math.min(item.value, 240)}px` }}
                  />

                  <p className="mt-4 text-center text-sm text-zinc-300">
                    {item.label}
                  </p>
                  <p className="text-lg font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={cardStyle}>
            <h3 className="text-2xl font-bold mb-6">
              Удовлетворенность клиентов 😍
            </h3>

            <div className="space-y-5">
              {satisfaction.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>

                  <div className="w-full bg-zinc-800 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-green-500"
                      style={{ width: `${item.value / 1.8}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {activeTab === 'prices' && (
        <section className={cardStyle}>
          <h3 className="text-3xl font-black mb-8 bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
            Анализ цен на роллы 💸
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 items-end h-auto md:h-80">
            {priceData.map((item) => (
              <div
                key={item.price}
                className="flex flex-col items-center gap-3 h-full justify-end"
              >
                <div className="w-full flex items-end gap-2 h-64">
                  <div
                    className="w-1/2 rounded-t-2xl bg-gradient-to-t from-cyan-500 to-sky-300"
                    style={{ height: `${item.fair * 5}px` }}
                  />

                  <div
                    className="w-1/2 rounded-t-2xl bg-gradient-to-t from-red-600 to-orange-300"
                    style={{ height: `${item.expensive * 5}px` }}
                  />
                </div>

                <div className="text-center">
                  <p className="font-bold">{item.price}</p>
                  <p className="text-xs text-zinc-400">цена</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-8 mt-8 text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-cyan-400" />
              <span>Справедливая цена</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-500" />
              <span>Слишком дорого</span>
            </div>
          </div>
        </section>
        )}

        {activeTab === 'overview' && (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={cardStyle}>
            <h3 className="text-xl font-bold mb-4">Ключевые выводы</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>• Лидером рынка является «Японский домик»</li>
              <li>• Молодежь — основная аудитория</li>
              <li>• Люди чаще приходят компанией</li>
              <li>• Большинство посещает суши 1–2 раза в месяц</li>
            </ul>
          </div>

          <div className={cardStyle}>
            <h3 className="text-xl font-bold mb-4">Что важно клиентам</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>• Размер порции</li>
              <li>• Качество роллов</li>
              <li>• Обслуживание</li>
              <li>• Атмосфера ресторана</li>
            </ul>
          </div>

          <div className={cardStyle}>
            <h3 className="text-xl font-bold mb-4">Инсайты</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>• Слишком низкая цена снижает доверие</li>
              <li>• Оптимальная цена около 199₽</li>
              <li>• Высокая удовлетворенность повышает лояльность</li>
              <li>• Бренд сильно влияет на выбор</li>
            </ul>
          </div>
        </section>
        )}

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={cardStyle}>
            <h3 className="text-2xl font-bold mb-6">
              Интерактивная диаграмма популярности 🔥
            </h3>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={popularity}>
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip />
                  <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                    {popularity.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={cardStyle}>
            <h3 className="text-2xl font-bold mb-6">
              Что влияет на выбор ресторана 🎯
            </h3>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" stroke="#fff" />
                  <Radar
                    name="Оценка"
                    dataKey="A"
                    stroke="#ff4d6d"
                    fill="#ff4d6d"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={cardStyle}>
            <h3 className="text-2xl font-bold mb-6">
              Цели посещения 🍣
            </h3>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={visitGoals}
                    dataKey="value"
                    nameKey="label"
                    outerRadius={120}
                    label
                  >
                    {visitGoals.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={cardStyle}>
            <h3 className="text-2xl font-bold mb-6">
              Динамика восприятия цен 📈
            </h3>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={priceData}>
                  <XAxis dataKey="price" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="fair"
                    stroke="#06b6d4"
                    fill="#06b6d4"
                  />
                  <Area
                    type="monotone"
                    dataKey="expensive"
                    stroke="#ff4d6d"
                    fill="#ff4d6d"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <footer className="text-center text-zinc-400 py-12">
          🍣 Dashboard создан на основе маркетингового исследования рынка
          суши-ресторанов
        </footer>
      </div>
    </div>
  );
}
