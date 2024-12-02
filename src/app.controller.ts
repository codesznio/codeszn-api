import { Controller, Get } from '@nestjs/common'

// Package
import * as packageInfo from '../package.json'

@Controller()
export class AppController {
    @Get()
    version() {
        return {
            success: true,
            api: packageInfo.version,
            data: {
                message: 'The API is running successfully.',
            },
        }
    }
}
