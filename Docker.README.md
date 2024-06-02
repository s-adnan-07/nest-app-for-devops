## Build Image

```bash
docker build -t nest-app .
```

## Create and run container

```bash
docker run --detach --name nest-app -p 5000:5000 nest-app
```
