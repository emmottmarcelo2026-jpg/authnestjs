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
    .setTitle('🔐 NestJS Authentication API')
    .setDescription(`
      API REST profesional para autenticación y gestión de usuarios.
      
      ## Características
      - ✅ Autenticación JWT con tokens seguros
      - ✅ Hash de contraseñas con bcrypt (10 salt rounds)
      - ✅ Validación automática de datos con class-validator
      - ✅ Rate limiting (10 req/min) para prevenir ataques
      - ✅ Protección de rutas con Guards
      - ✅ TypeORM con PostgreSQL
      
      ## Autenticación
      1. Registra un usuario en \`POST /auth/register\`
      2. Inicia sesión en \`POST /auth/login\` para obtener tu token
      3. Usa el token en el botón "Authorize" 🔓 arriba
      4. Todos los endpoints de \`/usuarios\` requieren autenticación
      
      ## Seguridad
      - Las contraseñas nunca se exponen en las respuestas
      - Los tokens JWT expiran en 24 horas
      - Rate limiting activo en todos los endpoints
    `)
    .setVersion('1.0.0')
    .addTag('auth', 'Endpoints de autenticación (registro y login)')
    .addTag('usuarios', 'Gestión de usuarios (requiere autenticación JWT)')
    .addTag('health', 'Estado del servidor y información de la API')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Ingresa tu token JWT (obtenido del login)',
        in: 'header',
      },
      'JWT-auth',
    )
    .setContact('Marcelo Emmott', 'https://github.com/emmottmarcelo2026-jpg', 'emmottmarcelo2026@gmail.com')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'API Docs - NestJS Auth',
    customfavIcon: 'https://nestjs.com/img/logo-small.svg',
    customCss: '.swagger-ui .topbar { display: none }',
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log('🚀 Servidor corriendo en http://localhost:3000');
  console.log('📚 Documentación Swagger (API Usuarios) disponible en http://localhost:3000/api');
}
bootstrap();
