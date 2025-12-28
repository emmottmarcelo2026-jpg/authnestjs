import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar validación automática de DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades no definidas en el DTO
      forbidNonWhitelisted: true, // Lanza error si hay propiedades no permitidas
      transform: true, // Transforma los payloads a instancias de DTO
    }),
  );

  // Habilitar serialización automática para excluir campos sensibles
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Manejo de Usuarios')
    .setDescription('API REST para la gestión completa de usuarios - Creación, lectura, actualización y eliminación (CRUD)')
    .setVersion('1.0')
    .addTag('usuarios', 'Endpoints para la gestión de usuarios')
    .setContact('Equipo de Desarrollo', '', 'contacto@ejemplo.com')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
  console.log('🚀 Servidor corriendo en http://localhost:3000');
  console.log('📚 Documentación Swagger (API Usuarios) disponible en http://localhost:3000/api');
}
bootstrap();
