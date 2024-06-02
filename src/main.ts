import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'

async function bootstrap() {
  const logger = new Logger('NestApplication')
  const PORT = process.env.PORT || 5000

  const app = await NestFactory.create(AppModule)
  await app.listen(PORT)
  logger.log(`Listening on port '${PORT}'`)
}

bootstrap()
