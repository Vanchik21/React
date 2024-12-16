Функціональні компоненти: У папці components є функціональні компоненти, такі як [ChosenRegion](https://github.com/Vanchik21/React/blob/master/Lab01/src/components/ChosenRegion.jsx) і [Map](https://github.com/Vanchik21/React/blob/master/Lab01/src/components/Map.jsx). Вони написані у простому та читабельному форматі.

Робота зі станом через хуки: Наприклад, у компоненті [Map](https://github.com/Vanchik21/React/blob/master/Lab01/src/components/Map.jsx) використовуються [useState](https://github.com/Vanchik21/React/blob/bb3c6d4b8d93cbc5acb771694c3674c8ad6e6f32/Lab01/src/components/Map.jsx#L3C1-L3C33) для зберігання координат, а useEffect для ініціалізації або оновлення стану при зміні вхідних даних.

Модульна структура: Код поділений на логічні частини — є окремі папки для компонентів, хуків (hooks), і сторінок (pages), що відповідає найкращим практикам модульного дизайну.

Кастомні хуки: У файлі [hooks/useHistory.js](https://github.com/Vanchik21/React/blob/master/Lab01/src/hooks/useHistory.jsx) реалізовано кастомний хук для роботи з історією змін, що допомагає уникнути дублювання логіки.

Валідація форм: У компоненті, де обробляються форми, підключено бібліотеку react-hook-form, а валідація здійснюється через zod. Це підвищує продуктивність при роботі з формами.

Читабельність компонентів: Компоненти у файлі [ChosenRegion.js](https://github.com/Vanchik21/React/blob/master/Lab01/src/components/ChosenRegion.jsx) розбиті на простіші підкомпоненти, що робить код чистішим і зрозумілішим.

Умовний рендеринг: Компонент ChosenRegion містить умовний рендеринг, що дозволяє відображати різні елементи залежно від вибраного користувачем регіону.