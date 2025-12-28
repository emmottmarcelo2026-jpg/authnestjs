import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Hola Mundo')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Endpoint Hola Mundo' })
  @ApiResponse({ status: 200, description: 'Retorna mensaje de saludo' })
  getHello(): string {
    return this.appService.getHello();
  }
}
