import { Soap } from './types';

export const SOAPS: Soap[] = [
  {
    id: 'lavendeltraum',
    name: 'Lavendeltraum & Schafsmilch',
    headline: 'Beruhigende Entspannung mit der Kraft der Eifelmelisse und Bio-Schafsmilch',
    description: 'Eine samtweiche Pflegeseife mit echtem ätherischem Lavendelöl und reichhaltiger Schafsmilch für eine besonders cremige Schaumbildung.',
    detailedDescription: 'Unser "Lavendeltraum" entführt Sie auf die sonnengeküssten Hänge über der Mosel, wo wilder Lavendel und wilde Kräuter blühen. Die Seife wird im schonenden Kaltverfahren hergestellt. Durch den Zusatz von frischer Bio-Schafsmilch entsteht ein herrlich dichter, pflegender Schaum, der die Haut rückfettet und vor dem Austrocknen schützt. Ideal für ein entspannendes Abendbad.',
    category: 'Blumig',
    scentProfile: ['Beruhigender Lavendel', 'Feine süße Vanillenote', 'Spur von krautiger Zitronenmelisse'],
    ingredients: [
      { German: 'Verseiftes Olivenöl', INCI: 'Sodium Olivate' },
      { German: 'Verseiftes Kokosöl', INCI: 'Sodium Cocoate' },
      { German: 'Bio-Schafsmilch', INCI: 'Sheep Milk' },
      { German: 'Sheabutter', INCI: 'Sodium Shea Butterate' },
      { German: 'Kaltgepresstes Traubenkernöl', INCI: 'Vitis Vinifera Seed Oil' },
      { German: 'Ätherisches Lavendelöl', INCI: 'Lavandula Angustifolia Oil' },
      { German: 'Lavendelblüten', INCI: 'Lavandula Angustifolia Flower' }
    ],
    benefits: [
      'Intensiv feuchtigkeitsspendend durch hohe Überfettung',
      'Besonders milder, feinporiger Schaum durch Schafsmilch-Bausteine',
      'Lavendelöl wirkt natürlich antiseptisch und tiefenentspannend'
    ],
    weight: '110g',
    price: '9,20 €',
    skinType: 'Empfindliche, trockene und beanspruchte Haut',
    curingPeriod: '6 Wochen Reifezeit',
    phValue: '8.5 (Mild-basisch)',
    fatContent: '10% Überfettung',
    oilContent: [
      { name: 'Kaltgepresstes Bio-Olivenöl', percentage: 40, benefits: 'Spendet langanhaltende Feuchtigkeit und Elastizität.' },
      { name: 'Bio-Sheabutter', percentage: 25, benefits: 'Glättet die Oberflächenstruktur der Haut und repariert Risse.' },
      { name: 'Rapsöl aus regionalem Anbau', percentage: 20, benefits: 'Reich an Vitamin E, unterstützt die Wundheilung.' },
      { name: 'Natives Kokosöl', percentage: 15, benefits: 'Sorgt für hervorragende Reinigungskraft und dicken Schaum.' }
    ],
    localSourced: 'Mit Bio-Milch und handgeernteten Lavendelblüten aus dem Moseltal.',
    colorTheme: {
      bg: 'bg-[#F2EDF7]',
      text: 'text-[#4A3B58]',
      border: 'border-[#DACFE3]',
      accent: '#7D6A91'
    }
  },
  {
    id: 'weinbergpfirsich',
    name: 'Weinbergpfirsich & Mandelöl',
    headline: 'Fruchtige Frische veredelt mit cremigem Mandelöl und Pfirsichkern-Extrakt',
    description: 'Eine sanft pflegende Seife mit dem zarten Duft des wilden roten Weinbergpfirsichs, reich an hautfreundlichem kaltgepresstem süßem Mandelöl.',
    detailedDescription: 'Der Rote Weinbergpfirsich ist ein echtes Wahrzeichen der Mosellandschaft. Diese Seife feiert seine samtige Natur: Mandelöl und pfirsichfarbene Tonerden umschmeicheln Ihre Sinne und bieten eine besonders cremige Pflege. Die Seife eignet sich hervorragend für die tägliche Gesichtsreinigung und hinterlässt ein seidig-weiches, erfrischtes Hautgefühl.',
    category: 'Frisch',
    scentProfile: ['Zarter, fruchtiger Pfirsich', 'Feine Bittermandel', 'Spritzige Grapefruit'],
    ingredients: [
      { German: 'Verseiftes Olivenöl', INCI: 'Sodium Olivate' },
      { German: 'Verseiftes Kokosöl', INCI: 'Sodium Cocoate' },
      { German: 'Süßes Mandelöl', INCI: 'Prunus Amygdalus Dulcis Oil' },
      { German: 'Rosa Tonerde', INCI: 'Kaolin (Pink Clay)' },
      { German: 'Duft aus rein natürlichen Ölen', INCI: 'Parfum (Natural Essential Oils)' },
      { German: 'Pfirsichkernöl', INCI: 'Prunus Persica Kernel Oil' }
    ],
    benefits: [
      'Gibt müder, fahler Haut einen rosigen Frische-Kick',
      'Sanfte Reinigung ohne Spannung durch beruhigendes Mandelöl',
      'Tonerdemineralien binden Unreinheiten besonders sanft'
    ],
    weight: '105g',
    price: '8,90 €',
    skinType: 'Mischhaut, normale bis empfindliche Gesichtshaut',
    curingPeriod: '5 Wochen Reifezeit',
    phValue: '8.2',
    fatContent: '8% Überfettung',
    oilContent: [
      { name: 'Kaltgepresstes Mandelöl', percentage: 35, benefits: 'Besonders reizarm, schützt und beruhigt sensible Hautzonen.' },
      { name: 'Olivenöl', percentage: 35, benefits: 'Trägt den natürlichen Säureschutzmantel der Haut.' },
      { name: 'Kokosöl', percentage: 20, benefits: 'Sorgt für sauberen Schaum und Stabilität des Seifenstücks.' },
      { name: 'Pfirsichkernöl', percentage: 10, benefits: 'Zieht schnell ein und bewahrt die Elastizität.' }
    ],
    localSourced: 'Kombiniert mit feinster pfirsichfarbener Heilerde für porentiefe Milde.',
    colorTheme: {
      bg: 'bg-[#FAF1EC]',
      text: 'text-[#61453E]',
      border: 'border-[#EFDDD5]',
      accent: '#A67C72'
    }
  },
  {
    id: 'moseltraube',
    name: 'Mosel-Traubenkern & Zeder',
    headline: 'Natur-Peeling mit gemahlenen Traubenkernen und feinstem Mosel-Traubenkernöl',
    description: 'Eine vitalisierende Ganzkörperseife mit sanftem Peelingeffekt. Herb-würzig im Duft, reich an Antioxidantien aus der Natur.',
    detailedDescription: 'Diese kraftvolle Seife nutzt das wertvolle Gold der Mosellandwirtschaft: Kaltgepresstes Traubenkernöl ist extrem reich an Proanthocyanidinen (OPC), welche als starker Antioxidant wirken. Sanft vermahlene Weintraubenkerne sorgen für einen feinen Peeling-Effekt, der alte Hautschüppchen abträgt und die Durchblutung anregt – wie ein kleiner Besuch in den Weinbergen.',
    category: 'Kräuterig',
    scentProfile: ['Würziges Zedernholz', 'Frisches Rosmarinkraut', 'Erdiges Patschuli'],
    ingredients: [
      { German: 'Verseiftes Olivenöl', INCI: 'Sodium Olivate' },
      { German: 'Kaltgepresstes Mosel-Traubenkernöl', INCI: 'Vitis Vinifera Seed Oil' },
      { German: 'Kokosnussöl', INCI: 'Sodium Cocoate' },
      { German: 'Fein gemahlene Weintraubenkerne', INCI: 'Vitis Vinifera Seed Powder' },
      { German: 'Rapsöl', INCI: 'Sodium Rapeseedate' },
      { German: 'Ätherisches Zedernholzöl', INCI: 'Cedrus Atlantica Bark Oil' },
      { German: 'Ätherisches Rosmarinöl', INCI: 'Rosmarinus Officinalis Leaf Oil' }
    ],
    benefits: [
      'Regt die Zellerneuerung durch sanftes, natürliches Peeling an',
      'Wirkt straffend und schützend dank hochkonzentriertem OPC-Traubenkernöl',
      'Der herbe Duft wirkt erdend, belebend und klärend'
    ],
    weight: '115g',
    price: '9,50 €',
    skinType: 'Normale Haut, müde Beine, perfekt als Dusch- und Peelingseife',
    curingPeriod: '7 Wochen Reifezeit',
    phValue: '8.8',
    fatContent: '12% Überfettung',
    oilContent: [
      { name: 'Bio-Traubenkernöl (kaltgepresst)', percentage: 30, benefits: 'Dringt besonders tief in die Hornschicht ein und transportiert Wirkstofe.' },
      { name: 'Olivenöl', percentage: 30, benefits: 'Schafft eine milde, feuchtigkeitserhaltende Schaumbasis.' },
      { name: 'Rapsöl', percentage: 20, benefits: 'Regional angebaut, reich an ungesättigten Fettsäuren.' },
      { name: 'Bio-Rizinusöl', percentage: 20, benefits: 'Wirkt außergewöhnlich gut als Schaumbooster und Cremespender.' }
    ],
    localSourced: 'Direkt bezogenes echtes Traubenkernöl von einem biologisch wirtschaftenden Mosel-Weingut.',
    colorTheme: {
      bg: 'bg-[#EFF3EE]',
      text: 'text-[#3E4A3B]',
      border: 'border-[#D4DFCC]',
      accent: '#6A7D6A'
    }
  },
  {
    id: 'wildekamille',
    name: 'Wilde Kamille & Ringelblume',
    headline: 'Die ultimative Allergiker- und Babyseife – parfümfrei und sanft lindernd',
    description: 'Eine pure Naturseife, hergestellt als starker Kräutersud aus wilder Kamille und Ringelblumen (Calendula) aus zertifizierter Wildsammlung.',
    detailedDescription: 'Die Natur bietet uns die besten Heilmittel. Für Menschen mit hochsensibler Haut, Allergien oder für die zarte Babyhaut haben wir diese besonders sanfte, komplett duftstofffreie Kräuterseife entwickelt. Durch den extrem hohen Anteil an Ringelblumenextrakt und beruhigendem Kamillentee wirkt diese Seife hautberuhigend, juckreizlindernd und unterstützt die Regeneration bei Ekzemen oder Rötungen.',
    category: 'Sanft',
    scentProfile: ['Duftfrei', 'Sehr dezenter, milder Eigengeruch nach Kamillentee und Sheabutter'],
    ingredients: [
      { German: 'Verseiftes Olivenöl mit Kamillenauszug', INCI: 'Sodium Olivate (Calendula Officinalis / Chamomilla Recutita Flower Extract)' },
      { German: 'Verseifte Sheabutter', INCI: 'Sodium Shea Butterate' },
      { German: 'Kokosöl', INCI: 'Sodium Cocoate' },
      { German: 'Ringelblumenblüten', INCI: 'Calendula Officinalis Flower' }
    ],
    benefits: [
      'Völlig allergenfrei, da 100% frei von Duftstoffen und Allergenen',
      'Enthält hochaktiven Extrakt aus Calendula zur Wundheilungsförderung',
      'Hochpflegende Rezeptur beruhigt irritierte Hautstellen im Handumdrehen'
    ],
    weight: '110g',
    price: '8,80 €',
    skinType: 'Neurodermitis, Schuppenflechte, extrem empfindliche Haut und Babyhaut',
    curingPeriod: '6 Wochen Reifezeit',
    phValue: '8.0 (Besonders hautfreundlich)',
    fatContent: '12% Überfettung',
    oilContent: [
      { name: 'Wilde-Dill-Olivenöl-Auszug', percentage: 45, benefits: 'Hervorragende Trägermedium für die entzündungshemmenden Flavonoide der Kamille.' },
      { name: 'Sheabutter', percentage: 35, benefits: 'Verleiht der Seife eine seidige Konsistenz und hinterlässt eine weiche Schutzbarriere.' },
      { name: 'Ungeröstetes Kokosöl', percentage: 20, benefits: 'Sorgt für sanfte Cleansing-Wirkung ohne auszutrocknen.' }
    ],
    localSourced: 'Blütenköpfe von Hand gepflückt an den ungespritzten Flussufern und Steilhängen der Mosel.',
    colorTheme: {
      bg: 'bg-[#FAF7EB]',
      text: 'text-[#5B5539]',
      border: 'border-[#ECE3BE]',
      accent: '#918453'
    }
  }
];

export const GENERAL_INFOS = {
  vorteile: [
    {
      title: 'Echtes Kaltverfahren (Cold Process)',
      description: 'Unsere Seifen werden bei niedrigen Temperaturen (unter 40°C) von Hand gerührt. Dadurch bleiben alle wertvollen Vitamine, Antioxidantien und pflegenden Öle im fertigen Produkt komplett erhalten.'
    },
    {
      title: 'Erhaltenes natürliches Glycerin',
      description: 'Bei der handgemachten Verseifung entsteht wertvolles pflanzliches Glycerin auf natürliche Weise. In industriellen Seifen wird es entzogen; bei uns bleibt es drin und spendet der Haut maximale Feuchtigkeit.'
    },
    {
      title: 'Luxuriöse Überfettung (8% bis 12%)',
      description: 'Wir berechnen unsere Rezepturen so, dass ein großer Teil des wertvollen Öls unverseift bleibt. Diese feinen Öle (z.B. Mandel- oder Traubenkernöl) legen sich als intensive Pflege direkt beim Waschen schützend auf Ihre Haut.'
    },
    {
      title: '100% Biologisch abbaubar & Mikroplastikfrei',
      description: 'Keine künstlichen Tenside, kein Silikon, kein Erdöl und absolut palmölfrei. Mit unseren Seifen waschen Sie sich mit dem reinen Gewissen, dass keinerlei schädliche Stoffe in den Wasserkreislauf gelangen.'
    },
    {
      title: 'Keine synthetischen Konservierungs- & Farbstoffe',
      description: 'Wir färben ausschließlich mit natürlichen Heilerden, Kräuterauszügen, gemahlenen Blüten oder Fruchtsäften. Der wunderbare Duft entstammt ausschließlich reinsten, naturheilkundlichen ätherischen Ölen.'
    }
  ],
  geschichte: {
    titel: 'Die Essenz der Mosel im Herzen unserer handgemachten Naturseifen',
    philosophie: 'La Mosella Seifenmanufaktur verbindet uraltes, traditionelles Saponifikations-Handwerk mit den reichhaltigen Naturschätzen des Moseltals. Gegründet von Marion Muszarsky in Traben-Trarbach, fertigen wir jede einzelne Seife in liebevoller Handarbeit an.',
    absatz1: 'Unsere Heimat, die weltberühmte Moselregion mit ihren steilen Schieferhängen und dem milden, fast mediterranen Mikroklima, bietet eine Fülle an botanischen Raritäten. Hier wachsen nicht nur edle Weine, sondern auch der Rote Weinbergpfirsich, wilde Kräuter, duftende Holundersträucher und zarte Kamillenblüten direkt an den Flussufern.',
    absatz2: 'Wir glauben fest an ein Leben im Einklang mit der Natur. Deshalb verzichten wir konsequent auf künstliche Zusätze, Tenside und unnötige Plastikverpackungen. Jedes Seifenstück reift sechs Wochen lang in unseren Holzregalen, um seine perfekte Festigkeit und Milde zu entfalten. Spüren Sie den Unterschied, den nur echt handgemachte Naturseife auf Ihrer Haut bewirken kann.'
  }
};
