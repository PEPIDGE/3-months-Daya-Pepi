# 3 Months Daya & Pepi

Романтичен интерактивен treasure hunt уебсайт, създаден с React.

## 🚀 Хостване във Vercel

Този проект е 100% front-end и е готов за директно хостване във Vercel.

### Стъпки за deploy:

1. **Качете проекта в GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Свържете с Vercel:**
   - Отидете на [vercel.com](https://vercel.com)
   - Кликнете "New Project"
   - Изберете вашето GitHub repo
   - Vercel автоматично ще открие Vite проекта

3. **Build Settings (автоматично се попълват):**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Deploy:**
   - Кликнете "Deploy" и изчакайте
   - Готово! Вашият сайт е live на `<project-name>.vercel.app`

## 📸 Добавяне на снимки

Снимките са placeholder. За да добавите вашите:

1. Поставете снимките в `client/public/images/`
2. Създайте папки за всяка локация:
   ```
   client/public/images/
   ├── nesebare/
   │   ├── 1.jpg
   │   ├── 2.jpg
   │   └── ... (6 снимки)
   ├── sozopol/
   ├── sofia/
   ├── varna/
   ├── bansko/
   └── pleven/
   ```

3. Променете пътищата в `client/src/pages/LocationPage.tsx`:
   ```typescript
   const placeholderImages = Array(6).fill(null).map((_, i) => 
     `/images/${location}/${i + 1}.jpg`
   );
   ```

## 🎥 YouTube видео

В `client/src/pages/SecretPage.tsx` променете YouTube линка:
```typescript
src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

## 💻 Локално разработване

```bash
npm install
npm run dev
```

## 🎨 Персонализация

- Цветове: `client/src/index.css`
- Текстове на историите: `client/src/pages/Home.tsx`
- Въпроси в куиза: `client/src/components/QuizForm.tsx`

## ✨ Функции

- ✅ 100% front-end (без нужда от сървър)
- ✅ localStorage за прогрес
- ✅ Интерактивен пъзел в Банско
- ✅ Quiz с 15 въпроса
- ✅ Responsive дизайн
- ✅ Cursor-сърце
- ✅ Плавни градиент анимации

## 📝 Технологии

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Wouter (routing)
- Shadcn UI

Направено с ❤️
