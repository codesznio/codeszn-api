import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { ConfigService } from '@nestjs/config'

// App
import { AppModule } from '@/app.module'

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        rawBody: true,
    })

    // Express settings
    app.set('trust proxy', true)
    app.enableCors()
    app.disable('x-powered-by')

    const configService = app.get(ConfigService)
    const port = configService.get<number>('app.port')

    await app.listen(port)
}
bootstrap()
