# Ideas Manager — Node.js CRUD API (No Libraries)

## Description

This is a practice project for building a custom API server in Node.js **without using any third-party libraries** (like Express). The theme is an **Ideas Manager**: a minimal backend for storing your project ideas, notes, or inspirations.

---

## Goal

* Understand fundamental backend architecture in Node.js
* Learn to work with HTTP and the core `http` module
* Build a full-featured CRUD system with JSON file storage

---

## 🔧 Technical Restrictions

* **Do NOT use**: Express, body-parser, uuid, etc.
* **Allowed modules**: only core modules (`http`, `url`, `fs`, `path`)

---

## Project Structure

```
/ideas-manager
├── server.js              # server entry point
├── router.js              # routes dispatcher
├── controller.js          # request handlers
├── service.js             # business logic
├── storage.js             # file operations
├── response.js            # response utilities
└── db.json                # idea data storage
```

---

## API Endpoints

| Method | Path         | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/ideas`     | Get all ideas           |
| GET    | `/ideas/:id` | Get one idea by ID      |
| POST   | `/ideas`     | Create a new idea       |
| PUT    | `/ideas/:id` | Update an existing idea |
| DELETE | `/ideas/:id` | Delete an idea          |

---

## Idea Object Structure

```json
{
  "id": "abc123",
  "title": "Build a To-Do App",
  "description": "Use Flutter + Firebase",
  "tags": ["flutter", "todo", "pet project"],
  "isFavorite": false,
  "createdAt": "2025-05-20T17:00:00.000Z"
}
```

---

## Extra Challenges

* [ ] Add tag filtering: `GET /ideas?tag=flutter`
* [ ] Add sorting by creation date: `GET /ideas?sort=desc`
* [ ] Validate: `title` is required (min 3 characters)
* [ ] Generate unique `id` (e.g., `Date.now().toString(36)`)

---

##  Run

```bash
node server.js
```

Server runs at: `http://localhost:3000`

---

## Request Example

### POST /ideas

```json
{
  "title": "New pet project",
  "description": "Build a voice bot for Telegram",
  "tags": ["telegram", "ai"]
}
```

### Response 201 Created

```json
{
  "id": "k78hs2",
  "title": "New pet project",
  "description": "Build a voice bot for Telegram",
  "tags": ["telegram", "ai"],
  "isFavorite": false,
  "createdAt": "2025-05-20T20:00:00.000Z"
}
```

---

## Tips

* Use `req.on('data')` and `req.on('end')` to parse request body
* Use `new URL(req.url, 'http://localhost')` to get query params
* Use `fs.promises.readFile` / `writeFile` to manage `db.json`

---

## Task Completion Checklist

* [ ] All 5 HTTP methods implemented
* [ ] Data stored in `db.json`
* [ ] JSON responses with proper status codes (200, 201, 400, 404, 500)
* [ ] Basic input validation present
* [ ] Proper module structure (router, controller, service, storage)

