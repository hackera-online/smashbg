# Smash BG

Сайт на фирма за строително събаряне. Чист HTML, CSS и JavaScript, без build стъпка.

## Структура

```
index.html        # всички страници (маршрутизация през #hash)
404.html          # пренасочва към страница 404 в сайта
css/style.css     # стилове
js/main.js        # данни, маршрутизация, форма
assets/img/       # снимки
assets/favicon.svg
```

Страници: `#home`, `#projects`, `#services`, `#areas`, `#about`, `#asbestos`, `#emergency`, `#contact`, `#privacy`, `#terms`, `#cookies`.

## Стартиране

Отворете `index.html` в браузър или пуснете локален сървър:

```
python3 -m http.server 8000
```

## GitHub Pages

Settings → Pages → Deploy from a branch → `main` / `/ (root)`.

## Преди пускане

- Сменете телефона `+359 888 000 000` и имейла `info@smashbg.demo` в `index.html` (търсете `888 000 000` и `smashbg.demo`).
- Свържете формата за оферта в `js/main.js` (сега е демо и не изпраща нищо), напр. Formspree или собствен бекенд.
- Попълнете и прегледайте с юрист страниците Поверителност, Общи условия и Бисквитки (полета в `[скоби]`).
- Заменете примерните отзиви, цифри и проекти с реални.
- Добавете банер за бисквитки, ако включите Google Analytics или карта.
- Заменете снимките в `assets/img/` с оригинали с по-висока резолюция.
