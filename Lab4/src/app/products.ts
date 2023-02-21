export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  link: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg',
    name: 'Смартфон Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ серый',
    price: 312,
    description: 'Сверхвысокая частота обновления. Высокая частота обновления 120 Гц обеспечивает бесперебойную работу и высокую детализацию изображения при просмотре веб-страниц. Частота дискретизации сенсорного слоя.',
    rating: 1,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item'
  },
  {
    id: 2,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный',
    price: 234,
    description: '6.6-дюймовый TFT-дисплей Galaxy A23 с V-образным вырезом позволяет видеть и делать больше. С технологией FHD+ и частотой обновления 90 Гц контент всегда будет оставаться четким и плавным. Делайте бесподобные фото с системой из четырех камер.',
    rating: 2,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item'
  },
  {
    id: 3,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg',
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ серый',
    price: 161,
    description: 'Xiaomi Redmi 10C оснащен большим дисплеем с диагональю 6.71 дюйма с защитным стеклом Corning Gorilla Glass, которое защищает экран от царапин и повреждений при падениях.',
    rating: 6,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item'
  },
  {
    id: 4,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: 1576,
    description: 'фронтальная камера: 12 Мп, 23 мм (экв.), f/1,9; поддержка 4G и 5G, Wi-Fi 6, Bluetooth 5.0, Lightning; A-GPS, ГЛОНАСС, GALILEO, BDS, QZSS; аккумулятор 4323 мА·ч, несъёмный, поддерживается быстрая проводная зарядка 18 Вт, беспроводная зарядка MagSafe 15 Вт.',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item'
  },
  {
    id: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h8c/49894748160030/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg',
    name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ черный',
    price: 290,
    description: 'Смартфон Galaxy A33 5G стал тоньше и элегантнее благодаря матовому покрытию, качественным рамкам и безупречному корпусу камеры с Ambient Edge. Благодаря 6.4-дюймовому экрану Infinity-U с частотой 90 Гц на смартфоне Galaxy A33 5G вы сможете увидеть все, что было скрыто от вашего взгляда',
    rating: 3,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item'
  },
  {
    id: 6,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h61/63072540131358/apple-iphone-14-128gb-cernyj-106363023-1.jpg',
    name: 'Смартфон Apple iPhone 14 128Gb черный',
    price: 948,
    description: 'iPhone 14 – новости из Купертино. Шикарный новый смартфон получил обновление в виде Dynamic Island и готов впечатлять фанатов. Новые камеры, обновленный процессор и шикарный новый дисплей – то, что ждали миллионы поклонников бренда, уже наступило.',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000#!/item'
  },
  {
    id: 7,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
    price: 287,
    description: 'Xiaomi Redmi Note 10 Pro придётся по душе тем, кто хотел бы получить всё и сразу за относительно небольшую стоимость. Смартфон отлично справляется с рядовыми задачами и демонстрирует высокую производительность.',
    rating: 8,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item'
  },
  {
    id: 8,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h46/50455778197534/orro-reno7-8-128gb-oranzevyj-104705825-1.jpg',
    name: 'Смартфон OPPO Reno 7 8 ГБ/128 ГБ оранжевый',
    price: 360,
    description: 'OPPO Reno7 – лучший для контента. Без ограничений! Множество опытов и экспериментов позволили создать первую в отрасли текстуру кожи из стекловолокна. Потрясающе смотрится, потрясающая наощупь. При этом, после множества тестов можно смело говорить о гарантии долговечности. Рамка с плоскими краями и модуль камеры соответствуют классической эстетике.',
    rating: 7,
    link: 'https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-oranzhevyi-104705825/?c=750000000#!/item'
  },
  {
    id: 9,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf6/h31/51340742459422/huawei-nova-y70-4-gb-128-gb-cernyj-105191899-1.jpg',
    name: 'Смартфон Huawei nova Y70 4 ГБ/128 ГБ черный',
    price: 223,
    description: 'Стеклянная поверхность телефона, кажется, течет сквозь пальцы, округляясь в форме изящным изгибом. Оглушительные Цвета Кристальный Голубой, Жемчужно-белый и Полуночный черный превращают этот танец света и тени в цветное зрелище! Благодаря 6.75-дюймовому дисплею HUAWEI FullView Display и соотношению экрана к корпусу 90,26%5, HUAWEI nova делает просмотр кинокартин более захватывающим.',
    rating: 10,
    link: 'https://kaspi.kz/shop/p/huawei-nova-y70-4-gb-128-gb-chernyi-105191899/?c=750000000#!/item'
  },
  {
    id: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf7/heb/61590720249886/vivo-y55-8-gb-128-gb-chernyi-105986595-1.jpg',
    name: 'Смартфон Vivo Y55 8 ГБ/128 ГБ черный',
    price: 313,
    description: 'Быстрая зарядка. Живите активно с быстрой зарядкой FlashCharge мощностью 44 Вт. Будьте уверены, девять уровней защиты обеспечивают повышенный уровень безопасности зарядки. Будьте на связи весь день. Благодаря аккумулятору ёмкостью 5000 мАч и фирменной технологии VEG вам больше не придётся беспокоиться о низком заряде аккумулятора.',
    rating: 9,
    link: 'https://kaspi.kz/shop/p/vivo-y55-8-gb-128-gb-chernyi-105986595/?c=750000000#!/item'
  },
  {
    id: 11,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h73/h53/49844769718302/nokia-g21-4-gb-128-gb-sinij-104374009-1.jpg',
    name: 'Смартфон Nokia G21 4 ГБ/128 ГБ синий',
    price: 165,
    description: 'Nokia G21 рассчитан на долгий срок службы — прочный корпус из поликарбоната, ежемесячные обновления для системы безопасности в течение трех лет и два года обновлений.   Большой экран с высокой частотой обновления Nokia G21 имеет экран с увеличенной диагональю 6.5 дюйма.',
    rating: 11,
    link: 'https://kaspi.kz/shop/p/nokia-g21-4-gb-128-gb-sinii-104374009/?c=750000000#!/item'
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/