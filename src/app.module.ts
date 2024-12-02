import { Module } from '@nestjs/common'

// Controllers
import { AppController } from '@/app.controller'

// Core Modules
import { ConfigModule } from './config'

@Module({
    imports: [ConfigModule],
    controllers: [AppController],
})
export class AppModule {}
