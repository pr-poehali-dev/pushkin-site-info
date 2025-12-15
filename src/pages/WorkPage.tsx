import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Work {
  id: string;
  title: string;
  year: string;
  category: string;
  content: string[];
}

const works: Work[] = [
  {
    id: 'evgeniy-onegin',
    title: 'Евгений Онегин',
    year: '1823-1831',
    category: 'Роман в стихах',
    content: [
      'Глава первая',
      '',
      '«Мой дядя самых честных правил,',
      'Когда не в шутку занемог,',
      'Он уважать себя заставил',
      'И лучше выдумать не мог.',
      'Его пример другим наука;',
      'Но, боже мой, какая скука',
      'С больным сидеть и день и ночь,',
      'Не отходя ни шагу прочь!',
      'Какое низкое коварство',
      'Полуживого забавлять,',
      'Ему подушки поправлять,',
      'Печально подносить лекарство,',
      'Вздыхать и думать про себя:',
      'Когда же чёрт возьмёт тебя!»',
      '',
      'II',
      '',
      'Так думал молодой повеса,',
      'Летя в пыли на почтовых,',
      'Всевышней волею Зевеса',
      'Наследник всех своих родных.',
      'Друзья Людмилы и Руслана!',
      'С героем моего романа',
      'Без предисловий, сей же час',
      'Позвольте познакомить вас:',
      'Онегин, добрый мой приятель,',
      'Родился на брегах Невы,',
      'Где, может быть, родились вы',
      'Или блистали, мой читатель;',
      'Там некогда гулял и я:',
      'Но вреден север для меня.',
      '',
      '...',
      '',
      '(Полный текст романа содержит более 5000 строк)',
    ],
  },
  {
    id: 'kapitanskaya-dochka',
    title: 'Капитанская дочка',
    year: '1836',
    category: 'Повесть',
    content: [
      'Глава I. Сержант гвардии',
      '',
      '«Береги честь смолоду»',
      '(Пословица)',
      '',
      'Отец мой Андрей Петрович Гринев в молодости своей служил при графе Минихе и вышел в отставку премьер-майором в 17.. году. С тех пор жил он в своей Симбирской деревне, где и женился на девице Василисе Егоровне Ю., дочери бедного тамошнего дворянина.',
      '',
      'Нас было девять человек детей. Все мои братья и сестры умерли во младенчестве. Матушка была еще мною брюхата, как уже я был записан в Семеновский полк сержантом, по милости майора гвардии князя Б., близкого нашего родственника.',
      '',
      'Если паче всякого чаяния матушка родила дочь, то батюшка объявил бы куда следовало о смерти неявившегося сержанта, и дело тем бы и кончилось. Я считался в отпуску до окончания наук.',
      '',
      'В то время воспитывались мы не по-нонешнему. С пятилетнего возраста отдан я был на руки стремянному Савельичу, за трезвое поведение пожалованному мне в дядьки.',
      '',
      '...',
      '',
      '(Повесть включает 14 глав)',
    ],
  },
  {
    id: 'boris-godunov',
    title: 'Борис Годунов',
    year: '1825',
    category: 'Драма',
    content: [
      'БОРИС ГОДУНОВ',
      '',
      'О мощный властелин судьбы!',
      'Не так ли ты над самой бездной,',
      'На высоте, уздой железной',
      'Россию поднял на дыбы?',
      '',
      'ДЕЙСТВИЕ ПЕРВОЕ',
      '',
      'КРЕМЛЕВСКИЕ ПАЛАТЫ',
      '(1598 года, 20 февраля)',
      '',
      'КНЯЗЬЯ ШУЙСКИЙ И ВОРОТЫНСКИЙ',
      '',
      'ВОРОТЫНСКИЙ',
      'Наряжены мы вместе город ведать,',
      'Но, кажется, нам не за кем смотреть:',
      'Москва пуста; вослед за патриархом',
      'К монастырю пошел и весь народ.',
      'Давай сойдем туда ж; чего сидеть нам здесь?',
      '',
      'ШУЙСКИЙ',
      'Я жду князя Мстиславского. Сюда',
      'Я с ним условился прийти и вместе',
      'Мы по Кремлю кой-что распорядим;',
      'Да только что-то медлит он.',
      '',
      '...',
      '',
      '(Драма состоит из 23 сцен)',
    ],
  },
  {
    id: 'ruslan-i-lyudmila',
    title: 'Руслан и Людмила',
    year: '1820',
    category: 'Поэма',
    content: [
      'РУСЛАН И ЛЮДМИЛА',
      '',
      'Посвящение',
      '',
      'Для вас, души моей царицы,',
      'Красавицы, для вас одних',
      'Времён минувших небылицы,',
      'В часы досугов золотых,',
      'Под шёпот старины болтливой,',
      'Рукою верной я писал;',
      'Примите ж вы мой труд игривый!',
      'Ничьих не требуя похвал,',
      'Счастлив уж я надеждой сладкой,',
      'Что дева с трепетом любви',
      'Посмотрит, может быть, украдкой',
      'На песни грешные мои.',
      '',
      'Песнь первая',
      '',
      'У лукоморья дуб зелёный;',
      'Златая цепь на дубе том:',
      'И днём и ночью кот учёный',
      'Всё ходит по цепи кругом;',
      'Идёт направо — песнь заводит,',
      'Налево — сказку говорит.',
      'Там чудеса: там леший бродит,',
      'Русалка на ветвях сидит;',
      'Там на неведомых дорожках',
      'Следы невиданных зверей;',
      'Избушка там на курьих ножках',
      'Стоит без окон, без дверей;',
      '',
      '...',
      '',
      '(Поэма содержит 6 песен)',
    ],
  },
  {
    id: 'medniy-vsadnik',
    title: 'Медный всадник',
    year: '1833',
    category: 'Поэма',
    content: [
      'МЕДНЫЙ ВСАДНИК',
      '',
      'Петербургская повесть',
      '',
      'Предисловие',
      '',
      'Происшествие, описанное в сей повести, основано на истине. Подробности наводнения заимствованы из тогдашних журналов. Любопытные могут справиться с известием, составленным В. Н. Берхом.',
      '',
      'Вступление',
      '',
      'На берегу пустынных волн',
      'Стоял он, дум великих полн,',
      'И вдаль глядел. Пред ним широко',
      'Река неслася; бедный чёлн',
      'По ней стремился одиноко.',
      'По мшистым, топким берегам',
      'Чернели избы здесь и там,',
      'Приют убогого чухонца;',
      'И лес, неведомый лучам',
      'В тумане спрятанного солнца,',
      'Кругом шумел.',
      '',
      'И думал он:',
      'Отсель грозить мы будем шведу,',
      'Здесь будет город заложен',
      'На зло надменному соседу.',
      'Природой здесь нам суждено',
      'В Европу прорубить окно,',
      'Ногою твёрдой стать при море.',
      'Сюда по новым им волнам',
      'Все флаги в гости будут к нам,',
      'И запируем на просторе.',
      '',
      '...',
      '',
      '(Поэма состоит из вступления и двух частей)',
    ],
  },
  {
    id: 'povesti-belkina',
    title: 'Повести Белкина',
    year: '1830',
    category: 'Проза',
    content: [
      'ПОВЕСТИ ПОКОЙНОГО ИВАНА ПЕТРОВИЧА БЕЛКИНА',
      '',
      'От издателя',
      '',
      'Взяв в свои руки сии повести, мы, в предисловии нашем, хотели поместить хотя краткое жизнеописание покойного автора и тем отчасти удовлетворить справедливому любопытству любителей отечественной словесности.',
      '',
      'ВЫСТРЕЛ',
      '',
      'Стрелялись мы.',
      '(Баратынский)',
      '',
      'Я поклялся застрелить его по праву дуэли (за ним остался еще мой выстрел).',
      '(Вечер на бивуаке)',
      '',
      'Мы стояли в местечке ***. Жизнь армейского офицера известна. Утром ученье, манеж; обед у полкового командира или в жидовском трактире; вечером пунш и карты.',
      '',
      'В *** не было ни одного открытого дома, ни одной невесты; мы собирались друг у друга, где, кроме своих мундиров, не видали ничего.',
      '',
      '...',
      '',
      '(Сборник включает 5 повестей: «Выстрел», «Метель», «Гробовщик», «Станционный смотритель», «Барышня-крестьянка»)',
    ],
  },
];

const WorkPage = () => {
  const { id } = useParams<{ id: string }>();
  const work = works.find((w) => w.id === id);

  if (!work) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Произведение не найдено</h1>
          <Link to="/">
            <Button>Вернуться на главную</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = works.findIndex((w) => w.id === id);
  const prevWork = currentIndex > 0 ? works[currentIndex - 1] : null;
  const nextWork = currentIndex < works.length - 1 ? works[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="ArrowLeft" size={20} />
              <span>К списку произведений</span>
            </Link>
            <div className="text-sm text-muted-foreground">{work.year}</div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8">
          <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
            {work.category}
          </span>
        </div>

        <h1 className="text-5xl font-bold mb-4 text-primary animate-fade-in">
          {work.title}
        </h1>

        <Card className="p-8 md:p-12 my-12 animate-fade-in">
          <div className="prose prose-lg max-w-none">
            {work.content.map((line, index) => {
              if (line === '') {
                return <br key={index} />;
              }
              if (line.startsWith('Глава') || line.startsWith('ДЕЙСТВИЕ') || line.startsWith('Песнь') || line === 'Вступление' || line === 'Предисловие' || line === 'Посвящение') {
                return (
                  <h2 key={index} className="text-2xl font-bold text-primary mt-8 mb-4">
                    {line}
                  </h2>
                );
              }
              if (line === work.title || line === 'МЕДНЫЙ ВСАДНИК' || line === 'РУСЛАН И ЛЮДМИЛА' || line === 'БОРИС ГОДУНОВ' || line.startsWith('ПОВЕСТИ ПОКОЙНОГО')) {
                return (
                  <h2 key={index} className="text-3xl font-bold text-center text-primary mb-8">
                    {line}
                  </h2>
                );
              }
              if (line === 'Петербургская повесть' || line === 'От издателя' || line === 'ВЫСТРЕЛ') {
                return (
                  <h3 key={index} className="text-xl font-semibold text-center text-muted-foreground mb-6">
                    {line}
                  </h3>
                );
              }
              if (line.startsWith('(') && line.endsWith(')')) {
                return (
                  <p key={index} className="text-muted-foreground italic text-center my-4">
                    {line}
                  </p>
                );
              }
              if (line === line.toUpperCase() && line.length > 3 && !line.includes('«')) {
                return (
                  <p key={index} className="font-semibold text-primary mt-6 mb-2">
                    {line}
                  </p>
                );
              }
              return (
                <p key={index} className="leading-relaxed mb-2 text-foreground">
                  {line}
                </p>
              );
            })}
          </div>
        </Card>

        <div className="flex justify-between items-center gap-4 mt-12">
          {prevWork ? (
            <Link to={`/work/${prevWork.id}`} className="flex-1">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Icon name="ChevronLeft" size={20} />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Предыдущее</div>
                  <div className="font-semibold">{prevWork.title}</div>
                </div>
              </Button>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextWork ? (
            <Link to={`/work/${nextWork.id}`} className="flex-1">
              <Button variant="outline" className="w-full justify-end gap-2">
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Следующее</div>
                  <div className="font-semibold">{nextWork.title}</div>
                </div>
                <Icon name="ChevronRight" size={20} />
              </Button>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </main>

      <footer className="border-t border-border mt-20 py-8 bg-card">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>Сайт посвящён творчеству Александра Сергеевича Пушкина</p>
        </div>
      </footer>
    </div>
  );
};

export default WorkPage;
