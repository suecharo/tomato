# tomato

do not download that data again: a data management system for any kind of transfer protocols (with shared annotation)

```bash=
$ deno init
✅ Project initialized

Run these commands to get started

  # Run the program
  deno run main.ts

  # Run the program and watch for file changes
  deno task dev

  # Run the tests
  deno test
```

```
docker compose -f docker-compose.dev.yml exec cli bash
```

subcommands:

- `tomato add`
- `tomato rm`
  remove file (--only-index)
- `tomato ls`
- `tomato fetch`
  - stream

---

- `tomato init`
- `tomato config`
- 考え中
  - `tomato status`
  - `tomato sync`
  - `tomato pull`
  - `tomato push`
  - `tomato serve`
    - minio pattern (URL)
  - `auth`
    - or web app でやる

---
