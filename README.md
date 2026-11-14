# Милена Корект

Статичен сайт на фирма за строително събаряне. Чист HTML, CSS и JavaScript, без build стъпка.
© 2026 МИЛЕНА КОРЕКТ ЕООД. Всички права запазени.

## Структура (всяка страница е отделен адрес)

```
index.html                         /
uslugi/  proekti/  rayoni/  za-nas/
azbestovi-pokrivi/  avariyno-sabaryane/  kontakti/
politika-za-poveritelnost/  obshti-usloviya/  biskvitki/
404.html            страница за грешка (noindex)
sitemap.xml         карта на сайта (със снимки за /proekti/)
robots.txt          правила за ботове + линк към sitemap
site.webmanifest    PWA / иконки
favicon.ico, assets/  икони, OG снимка (1200x630), снимки
.htaccess / _headers  HTTPS, кеш, компресия, защитни хедъри
.nojekyll           за GitHub Pages
```

## ВАЖНО преди пускане: домейн

В `canonical`, `og:url`, JSON-LD, `sitemap.xml` и `robots.txt` е заложен домейн `https://smashbg.bg`.
Сменете го с реалния (в папката на сайта):

```
grep -rIl "https://smashbg.bg" . | xargs sed -i 's#https://smashbg.bg#https://ВАШИЯТ-ДОМЕЙН#g'
```

След това: Google Search Console → Sitemaps → `https://ВАШИЯТ-ДОМЕЙН/sitemap.xml`.

## Още за довършване

- В страниците Поверителност и Общи условия остават `[номер]` (ЕИК) и `[адрес]`.
- Формата за оферта е демо и не изпраща данни (свържете Formspree или собствен бекенд в `js/main.js`).
- Отзивите, цифрите и проектите са примерни, заменете ги с реални.
- В JSON-LD адресът е само "София, BG"; добавете точен адрес и координати, когато са налични.
