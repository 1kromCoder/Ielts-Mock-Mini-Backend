# IELTS Mock Backend — NestJS + PostgreSQL

## Quick Start
```bash
cp .env.example .env   # kerakli qiymatlarni kiriting
npm install
npm run start:dev
# Swagger: http://localhost:${PORT:-4000}/docs
# Health:  http://localhost:${PORT:-4000}/api/health
```
> Eslatma: `synchronize` dev muhitida yoqilgan. Prod uchun o'chiring va migratsiya ishlating.

## API Endpoints (README talabi)
### Health
- `GET /api/health` → `{ ok, time }`

### Admin (CRUD)
- `POST /api/admin/questions`
  - body: `{ "text": "....", "options": ["A","B","C","D"], "correctIndex": 1 }`
- `GET /api/admin/questions`
- `GET /api/admin/questions/:id`
- `PATCH /api/admin/questions/:id`
- `DELETE /api/admin/questions/:id`

### Test Flow
- `GET /api/test/questions?limit=20` — random savollar (correctIndex berilmaydi)
- `POST /api/test/submit`
  - body: `{ "answers": [{ "questionId": 1, "selectedIndex": 0 }] }`
  - response: `{ total, correct, percent, results: [...] }`

## Tech
- NestJS, TypeORM, PostgreSQL
- class-validator (DTO), Swagger docs
