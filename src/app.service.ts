import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiInfo() {
    return {
      name: 'NestJS Authentication API',
      version: '1.0.0',
      description: 'API REST profesional con autenticación JWT, TypeORM y PostgreSQL',
      documentation: '/api',
      endpoints: {
        auth: {
          register: 'POST /auth/register',
          login: 'POST /auth/login',
        },
        usuarios: {
          list: 'GET /usuarios (requiere autenticación)',
          getOne: 'GET /usuarios/:id (requiere autenticación)',
          create: 'POST /usuarios (requiere autenticación)',
          update: 'PATCH /usuarios/:id (requiere autenticación)',
          delete: 'DELETE /usuarios/:id (requiere autenticación)',
        },
        health: 'GET /health',
      },
      features: [
        'Autenticación JWT',
        'Hash de contraseñas con bcrypt',
        'Validación de DTOs',
        'Rate limiting',
        'Documentación Swagger',
        'TypeORM con PostgreSQL',
      ],
    };
  }
}
