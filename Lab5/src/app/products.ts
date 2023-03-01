export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  link: string;
  rating: number;
  category: number;
  likes: number;
}

export const products = [
  {
    id: 1,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg',
    name: 'Смартфон Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ серый',
    price: 312,
    description: 'Сверхвысокая частота обновления. Высокая частота обновления 120 Гц обеспечивает бесперебойную работу и высокую детализацию изображения при просмотре веб-страниц. Частота дискретизации сенсорного слоя.',
    rating: 1,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item',
    category: 1,
    likes: 0
  },
  {
    id: 2,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный',
    price: 234,
    description: '6.6-дюймовый TFT-дисплей Galaxy A23 с V-образным вырезом позволяет видеть и делать больше. С технологией FHD+ и частотой обновления 90 Гц контент всегда будет оставаться четким и плавным. Делайте бесподобные фото с системой из четырех камер.',
    rating: 2,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item',
    category: 1,
    likes: 0
  },
  {
    id: 3,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg',
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ серый',
    price: 161,
    description: 'Xiaomi Redmi 10C оснащен большим дисплеем с диагональю 6.71 дюйма с защитным стеклом Corning Gorilla Glass, которое защищает экран от царапин и повреждений при падениях.',
    rating: 6,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item',
    category: 1,
    likes: 0
  },
  {
    id: 4,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: 1576,
    description: 'фронтальная камера: 12 Мп, 23 мм (экв.), f/1,9; поддержка 4G и 5G, Wi-Fi 6, Bluetooth 5.0, Lightning; A-GPS, ГЛОНАСС, GALILEO, BDS, QZSS; аккумулятор 4323 мА·ч, несъёмный, поддерживается быстрая проводная зарядка 18 Вт, беспроводная зарядка MagSafe 15 Вт.',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    category: 1,
    likes: 0
  },
  {
    id: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h8c/49894748160030/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg',
    name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ черный',
    price: 290,
    description: 'Смартфон Galaxy A33 5G стал тоньше и элегантнее благодаря матовому покрытию, качественным рамкам и безупречному корпусу камеры с Ambient Edge. Благодаря 6.4-дюймовому экрану Infinity-U с частотой 90 Гц на смартфоне Galaxy A33 5G вы сможете увидеть все, что было скрыто от вашего взгляда',
    rating: 3,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item',
    category: 1,
    likes: 0
  },
  {
    id: 6,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h61/63072540131358/apple-iphone-14-128gb-cernyj-106363023-1.jpg',
    name: 'Смартфон Apple iPhone 14 128Gb черный',
    price: 948,
    description: 'iPhone 14 – новости из Купертино. Шикарный новый смартфон получил обновление в виде Dynamic Island и готов впечатлять фанатов. Новые камеры, обновленный процессор и шикарный новый дисплей – то, что ждали миллионы поклонников бренда, уже наступило.',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000#!/item',
    category: 1,
    likes: 0
  },
  {
    id: 7,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
    price: 287,
    description: 'Xiaomi Redmi Note 10 Pro придётся по душе тем, кто хотел бы получить всё и сразу за относительно небольшую стоимость. Смартфон отлично справляется с рядовыми задачами и демонстрирует высокую производительность.',
    rating: 8,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
    category: 1,
    likes: 0
  },
  {
    id: 8,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h46/50455778197534/orro-reno7-8-128gb-oranzevyj-104705825-1.jpg',
    name: 'Смартфон OPPO Reno 7 8 ГБ/128 ГБ оранжевый',
    price: 360,
    description: 'OPPO Reno7 – лучший для контента. Без ограничений! Множество опытов и экспериментов позволили создать первую в отрасли текстуру кожи из стекловолокна. Потрясающе смотрится, потрясающая наощупь. При этом, после множества тестов можно смело говорить о гарантии долговечности. Рамка с плоскими краями и модуль камеры соответствуют классической эстетике.',
    rating: 7,
    link: 'https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-oranzhevyi-104705825/?c=750000000#!/item',
    category: 1,
    likes: 0
  },
  {
    id: 9,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf6/h31/51340742459422/huawei-nova-y70-4-gb-128-gb-cernyj-105191899-1.jpg',
    name: 'Смартфон Huawei nova Y70 4 ГБ/128 ГБ черный',
    price: 223,
    description: 'Стеклянная поверхность телефона, кажется, течет сквозь пальцы, округляясь в форме изящным изгибом. Оглушительные Цвета Кристальный Голубой, Жемчужно-белый и Полуночный черный превращают этот танец света и тени в цветное зрелище! Благодаря 6.75-дюймовому дисплею HUAWEI FullView Display и соотношению экрана к корпусу 90,26%5, HUAWEI nova делает просмотр кинокартин более захватывающим.',
    rating: 10,
    link: 'https://kaspi.kz/shop/p/huawei-nova-y70-4-gb-128-gb-chernyi-105191899/?c=750000000#!/item',
    category: 1,
    likes: 0
  },
  {
    id: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf7/heb/61590720249886/vivo-y55-8-gb-128-gb-chernyi-105986595-1.jpg',
    name: 'Смартфон Vivo Y55 8 ГБ/128 ГБ черный',
    price: 313,
    description: 'Быстрая зарядка. Живите активно с быстрой зарядкой FlashCharge мощностью 44 Вт. Будьте уверены, девять уровней защиты обеспечивают повышенный уровень безопасности зарядки. Будьте на связи весь день. Благодаря аккумулятору ёмкостью 5000 мАч и фирменной технологии VEG вам больше не придётся беспокоиться о низком заряде аккумулятора.',
    rating: 9,
    link: 'https://kaspi.kz/shop/p/vivo-y55-8-gb-128-gb-chernyi-105986595/?c=750000000#!/item',
    category: 1,
    likes: 0
  },
  {
    id: 11,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h73/h53/49844769718302/nokia-g21-4-gb-128-gb-sinij-104374009-1.jpg',
    name: 'Смартфон Nokia G21 4 ГБ/128 ГБ синий',
    price: 165,
    description: 'Nokia G21 рассчитан на долгий срок службы — прочный корпус из поликарбоната, ежемесячные обновления для системы безопасности в течение трех лет и два года обновлений.   Большой экран с высокой частотой обновления Nokia G21 имеет экран с увеличенной диагональю 6.5 дюйма.',
    rating: 11,
    link: 'https://kaspi.kz/shop/p/nokia-g21-4-gb-128-gb-sinii-104374009/?c=750000000#!/item',
    category: 1,
    likes: 0
  },
  {
    id: 12,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
    name:'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 170000,
    description: 'диагональ экрана: 15.6 дюйм'+
    'процессор: Intel Pentium Gold 7505'+
    'видеокарта: Intel UHD Graphics'+
    'размер оперативной памяти: 8 ГБ'+
    'тип жесткого диска: SSD'+
    'общий объем накопителей: 256 ГБ',
    rating : 1,
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item',
    category: 2,
    likes: 0
  },
  {
    id: 13,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 390000,
    description:'диагональ экрана: 15.6 дюйм'+
    'процессор: Intel Core i5 11400H'+
    'видеокарта: NVIDIA GeForce GTX 1650'+
    'размер оперативной памяти: 16 ГБ'+
    'тип жесткого диска: SSD'+
    'общий объем накопителей: 512 ГБ',
    rating: 2,
    link:'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    category:2,
    likes:0
  },
  {
    id: 14,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbd/65953424277534/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg',
    name:'Ноутбук ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый',
    price:250000,
    description:'диагональ экрана: 15.6 дюйм'+
    'процессор: Intel Core i3 1115G4'+
    'видеокарта: Intel UHD Graphics'+
    'размер оперативной памяти: 8 ГБ'+
    'тип жесткого диска: SSD'+
    'общий объем накопителей: 512 ГБ',
    rating: 3,
    link: 'https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000#!/item',
    category:2,
    likes:0
  },
  {
    id: 15,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    name:'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 480000,
    description:'диагональ экрана: 13.3 дюйм'+
    'процессор: Apple M1'+
    'видеокарта: Apple M1 7 core'+
    'размер оперативной памяти: 8 ГБ'+
    'тип жесткого диска: SSD'+
    'общий объем накопителей: 256 ГБ',
    rating: 4,
    link:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    category:2,
    likes:0
  },
  {
    id: 16,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/he2/67940461740062/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-1.jpg',
    name: 'Ноутбук Lenovo IdeaPad 1 14IGL05 81VU00H3RU серый',
    price: 140000,
    description:'диагональ экрана: 14 дюйм'+
    'процессор: Intel Celeron N4020'+
    'видеокарта: Intel UHD Graphics 600'+
    'размер оперативной памяти: 4 ГБ'+
    'тип жесткого диска: SSD'+
    'общий объем накопителей: 128 ГБ',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874/?c=750000000#!/item',
    category: 2,
    likes:0
  },
  {
    id: 17,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/ha0/48926247878686/yasin-led-32e7000-cernyj-103411518-1.jpg',
    name:'Телевизор Yasin LED-32E7000 81 см черный',
    price: 60000,
    description:'Благодаря разрешению HD зритель с удовольствием посмотрит на своём телевизоре любой фильм, ведь его изображение будет выше всяких похвал. Качество очень хорошаяю',
    rating: 1,
    link: 'https://kaspi.kz/shop/p/yasin-led-32e7000-81-sm-chernyi-103411518/?c=750000000#!/item',
    category: 3,
    likes:0
  },
  {
    id: 18,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h18/49319748468766/samsung-ue43t5300au-chernyi-100182013-1.jpg',
    name: 'Телевизор Samsung UE43T5300AUXCE 109 см черный',
    price: 200000,
    description:'Смотрите HDR контент с улучшенной четкостью и точнейшей цветопередачей. Телевизор Samsung UHD обеспечивает более точную передачу деталей в самых ярких и темных сценах. Технология Ultra Clean View анализирует исходный контент с помощью новейшего алгоритма и формирует более качественные изображения с минимальным искажением. Наслаждайтесь четкостью изображения.',
    rating: 2,
    link:'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item',
    category:3,
    likes:0
  },
  {
    id: 19,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/he4/49320430370846/lg-43lm5772pla-108-sm-cernyj-101293496-1-Container.jpg',
    name:'Телевизор LG 43LM5772PLA 109 см черный',
    price: 180000,
    description: 'Телевизоры LG HD позволяют наслаждаться более качественным изображением благодаря высокому разрешению и ярким цветам. Телевизоры LG HD созданы для того, чтобы удивлять вас отличным качеством изображения — в несколько раз лучше, чем SD. ',
    rating: 3,
    link:'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000#!/item',
    category:3,
    likes:0
  },
  {
    id: 20,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h3f/49244137586718/yasin-40g7-cernyj-104045834-1.jpg',
    name:'Телевизор Yasin 40G7 102 см черный',
    price:115000,
    description:'Оригинальные телевизоры со вcтроенным тюнером DVD T2. Технологии Smart и Android у Вас дома! Благодаря разрешению Ultra-HD зритель с удовольствием просмотрит на своём телевизоре любой фильм, ведь его изображение будет выше всяких похвал.',
    rating: 4,
    link:'https://kaspi.kz/shop/p/yasin-40g7-102-sm-chernyi-104045834/?c=750000000#!/item',
    category: 3,
    likes: 0
  },
  {
    id: 21,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h35/51110128386078/lg-50uq76003ld-chernyi-105054596-1.jpg',
    name:'Телевизор LG 50UQ76003LD 127 см черный',
    price:270000,
    description:'Real 4K. Тонкий дизайн. Интеллектуальный процессор α5 Gen5 для оптимального просмотра. ThinQ AI & WebOS для персонализации контента',
    rating: 5,
    link:'https://kaspi.kz/shop/p/lg-50uq76003ld-127-sm-chernyi-105054596/?c=750000000#!/item',
    category: 3,
    likes: 0
  },
  {
    id: 22,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h50/h01/48290724970526/samsung-galaxy-tab-a8-10-5-dujmov-4-gb-64-gb-seryj-103450834-1.jpg',
    name:'Планшет Samsung Galaxy Tab A8 SM-X205N 10.5 дюймов 4 Гб/128 Гб серый',
    price:110000,
    description:'Благодаря тонким рамкам (10.2 мм) планшета Samsung Galaxy Tab A8 вы сможете полностью погрузиться в происходящее на большом 10.5" экране. Наслаждайтесь любимыми фильмами и контентом вместе с Galaxy Tab A8, открывая для себя удивительный мир. Благодаря 4 стереодинамикам с поддержкой технологии Dolby Atmos, вы сможете насладиться исключительной точностью и глубиной звучания контента.',
    rating: 1,
    link:'https://kaspi.kz/shop/p/samsung-galaxy-tab-a8-sm-x205n-10-5-djuimov-4-gb-128-gb-seryi-103450834/?c=750000000#!/item',
    category: 4,
    likes: 0
  },
  {
    id: 23,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha9/h54/48110926659614/apple-ipad-2021-wi-fi-64gb-seryj-102301598-1-Container.jpg',
    name:'Планшет Apple iPad 2021 10.2 64Gb Wi-Fi серый',
    price:170000,
    description:'Мощный. Простой в использовании и универсальный. iPad создан специально для ваших любимых занятий. Работайте, играйте, творите, учитесь, общайтесь и делайте множество других дел. Благодаря чипу A13 Bionic новый iPad реагирует быстрее в любой ситуации: когда вы отправляете сообщения, ищете контент в интернете или используете одновременно несколько приложений.',
    rating: 2,
    link:'https://kaspi.kz/shop/p/apple-ipad-2021-10-2-64gb-wi-fi-seryi-102301598/?c=750000000#!/item',
    category: 4,
    likes: 0
  },
  {
    id: 24,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h99/h37/34033089347614/samsung-galaxy-tab-a7-lite-8-7-sm-t225-seryj-101785657-1-Container.jpg',
    name:'Планшет Samsung Galaxy Tab A7 Lite 8.7 SM-T225 8.7 дюймов 3 Гб/32 Гб серый',
    price:65000,
    description:'Планшет Samsung Galaxy Tab A7 Lite выполнен в металлическом корпусе и характеризуется востребованным функционалом. Он оснащен экраном диагональю 8.7 дюйма с разрешающей способностью 1340x800 пикселей и мультисенсорной панелью управления.',
    rating: 3,
    link:'https://kaspi.kz/shop/p/samsung-galaxy-tab-a7-lite-8-7-sm-t225-8-7-djuimov-3-gb-32-gb-seryi-101785657/?c=750000000#!/item',
    category: 4,
    likes: 0
  },
  {
    id: 25,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6a/h6a/48290573910046/samsung-galaxy-tab-a8-10-5-dujmov-4-gb-64-gb-seryj-103450735-1.jpg',
    name:'Планшет Samsung Galaxy Tab A8 SM-X205N 10.5 дюймов 4 Гб/64 Гб серый',
    price:100000,
    description:'Благодаря тонким рамкам (10.2 мм) планшета Samsung Galaxy Tab A8 вы сможете полностью погрузиться в происходящее на большом 10.5" экране. Наслаждайтесь любимыми фильмами и контентом вместе с Galaxy Tab A8, открывая для себя удивительный мир.',
    rating: 4,
    link:'https://kaspi.kz/shop/p/samsung-galaxy-tab-a8-sm-x205n-10-5-djuimov-4-gb-64-gb-seryi-103450735/?c=750000000#!/item',
    category: 4,
    likes:0
  },
  {
    id: 25,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h02/hca/64895798050846/apple-ipad-pro-2022-11-128gb-wi-fi-seryi-107276534-1.jpg',
    name:'Планшет Apple iPad Pro 2022 11 128GB Wi-Fi серый',
    price:440000,
    description:'iPad Pro 11 - это младшая модель в Pro-серии, новое поколение которой было представлено в октябре 2022. Внешне новинка абсолютно неотличима от предшественника, но получила внушительный аппаратный апгрейд. ',
    rating: 5,
    link:'https://kaspi.kz/shop/p/apple-ipad-pro-2022-11-128gb-wi-fi-seryi-107276534/?c=750000000#!/item',
    category: 4,
    likes: 0
  },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/