### basics configuration project

yarn init -y

yarn add typescript prisma ts-node-dev @types/express @types/jsonwebtoken @types/bcrypt -D

yarn add express bcrypt jsonwebtoken @prisma/client

### initialization typescript

yarn tsc --init

### initialization prisma

yarn prisma init

npx prisma init

### make migration

yarn prisma migrate dev

#### prisma format

yarn prisma format

### Install express async errors

yarn add express-async-errors
