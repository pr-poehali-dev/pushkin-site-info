import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('biography');

  const works = [
    { id: 'evgeniy-onegin', title: 'Евгений Онегин', year: '1823-1831', category: 'Роман в стихах' },
    { id: 'kapitanskaya-dochka', title: 'Капитанская дочка', year: '1836', category: 'Повесть' },
    { id: 'boris-godunov', title: 'Борис Годунов', year: '1825', category: 'Драма' },
    { id: 'ruslan-i-lyudmila', title: 'Руслан и Людмила', year: '1820', category: 'Поэма' },
    { id: 'medniy-vsadnik', title: 'Медный всадник', year: '1833', category: 'Поэма' },
    { id: 'povesti-belkina', title: 'Повести Белкина', year: '1830', category: 'Проза' }
  ];

  const timeline = [
    { year: '1799', event: 'Родился в Москве 6 июня' },
    { year: '1811', event: 'Поступил в Царскосельский лицей' },
    { year: '1817', event: 'Окончание лицея, служба в Коллегии иностранных дел' },
    { year: '1820', event: 'Южная ссылка' },
    { year: '1824', event: 'Ссылка в Михайловское' },
    { year: '1831', event: 'Женитьба на Наталье Гончаровой' },
    { year: '1837', event: 'Дуэль и смерть 10 февраля' }
  ];

  const filteredWorks = works.filter(work =>
    work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    work.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTimeline = timeline.filter(item =>
    item.year.includes(searchQuery) ||
    item.event.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Александр Пушкин
            </h1>
            <div className="text-muted-foreground text-sm">1799 — 1837</div>
          </div>
          
          <div className="relative max-w-xl">
            <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Поиск по произведениям и биографии..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6"
            />
          </div>
        </div>
      </header>

      <nav className="border-b border-border bg-card">
        <div className="container mx-auto px-6">
          <div className="flex gap-8 overflow-x-auto">
            {['biography', 'works', 'timeline', 'gallery'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                  activeSection === section
                    ? 'border-secondary text-secondary font-semibold'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {section === 'biography' && 'Биография'}
                {section === 'works' && 'Произведения'}
                {section === 'timeline' && 'Хронология'}
                {section === 'gallery' && 'Галерея'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        {activeSection === 'biography' && (
          <div className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="md:col-span-1">
                <Card className="overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/files/e0fdc6ee-d0dc-4ac3-8c3e-72ed2afb6cca.png"
                    alt="Александр Сергеевич Пушкин"
                    className="w-full h-auto object-cover"
                  />
                </Card>
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Великий русский поэт</h2>
                  <p className="text-lg text-foreground leading-relaxed">
                    Александр Сергеевич Пушкин — создатель современного русского литературного языка, 
                    чьё творчество стало основой русской литературы XIX века.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">Ранние годы</h3>
                  <p className="text-foreground leading-relaxed">
                    Родился в Москве в семье небогатого дворянина. С детства воспитывался в литературной атмосфере, 
                    его отец был знаком с Карамзиным и Жуковским. В 1811 году поступил в Царскосельский лицей, 
                    где началось его поэтическое становление.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">Творческий путь</h3>
                  <p className="text-foreground leading-relaxed">
                    Пушкин работал во всех литературных жанрах: создавал лирические стихотворения, поэмы, 
                    драмы, прозу. Его произведения отличаются глубиной мысли, совершенством формы и 
                    музыкальностью языка. Он заложил основы русского реализма.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">Наследие</h3>
                  <p className="text-foreground leading-relaxed">
                    Творчество Пушкина оказало огромное влияние на развитие русской культуры. 
                    Его произведения переведены на множество языков мира и остаются актуальными 
                    для читателей всех поколений.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'works' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-primary">Произведения</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(searchQuery ? filteredWorks : works).map((work, index) => (
                <Link key={index} to={`/work/${work.id}`}>
                  <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                        {work.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">{work.title}</h3>
                    <p className="text-muted-foreground mb-3">{work.year}</p>
                    <div className="flex items-center gap-2 text-secondary text-sm font-medium">
                      <span>Читать полностью</span>
                      <Icon name="ArrowRight" size={16} />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            {searchQuery && filteredWorks.length === 0 && (
              <p className="text-center text-muted-foreground mt-8">Ничего не найдено</p>
            )}
          </div>
        )}

        {activeSection === 'timeline' && (
          <div className="animate-fade-in max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary">Хронология жизни</h2>
            <div className="relative border-l-2 border-secondary/30 pl-8 space-y-8">
              {(searchQuery ? filteredTimeline : timeline).map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[2.35rem] w-6 h-6 rounded-full bg-secondary border-4 border-background"></div>
                  <div className="mb-1 text-2xl font-bold text-secondary">{item.year}</div>
                  <p className="text-lg text-foreground">{item.event}</p>
                </div>
              ))}
            </div>
            {searchQuery && filteredTimeline.length === 0 && (
              <p className="text-center text-muted-foreground mt-8">Ничего не найдено</p>
            )}
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-primary">Галерея</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://cdn.poehali.dev/files/e0fdc6ee-d0dc-4ac3-8c3e-72ed2afb6cca.png"
                  alt="Портрет Пушкина"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-primary">Портрет А.С. Пушкина</h3>
                  <p className="text-sm text-muted-foreground">Кипренский О.А., 1827</p>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-64 bg-muted flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-muted-foreground" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-primary">Царскосельский лицей</h3>
                  <p className="text-sm text-muted-foreground">Место учёбы поэта</p>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-64 bg-muted flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-muted-foreground" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-primary">Михайловское</h3>
                  <p className="text-sm text-muted-foreground">Усадьба, место ссылки</p>
                </div>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-20 py-8 bg-card">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>Сайт посвящён творчеству Александра Сергеевича Пушкина</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;