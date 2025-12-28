# 🔐 NestJS Authentication API

API REST profesional de autenticación y gestión de usuarios construida con NestJS, TypeORM, PostgreSQL y JWT.

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

## 📋 Descripción

Sistema completo de autenticación y gestión de usuarios que implementa las mejores prácticas de seguridad y desarrollo backend moderno. Ideal como proyecto de portafolio o base para aplicaciones empresariales.

## ✨ Características Principales

### 🔒 Seguridad

- ✅ **Autenticación JWT** con tokens firmados y validados
- ✅ **Contraseñas hasheadas** con bcrypt (10 salt rounds)
- ✅ **Rate limiting** para prevenir ataques de fuerza bruta (10 req/min)
- ✅ **Validación robusta** de datos con class-validator
- ✅ **Protección de rutas** con Guards de Passport
- ✅ **Exclusión automática** de contraseñas en respuestas

### 🏗️ Arquitectura

- ✅ **Arquitectura modular** escalable
- ✅ **TypeORM** con PostgreSQL
- ✅ **DTOs validados** automáticamente
- ✅ **Documentación Swagger** interactiva
- ✅ **Docker Compose** para desarrollo
- ✅ **Variables de entorno** configurables

### 📚 Funcionalidades

- ✅ Registro de usuarios
- ✅ Login con JWT
- ✅ CRUD completo de usuarios
- ✅ Actualización segura de contraseñas
- ✅ Validación de emails únicos

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js >= 18
- Docker y Docker Compose
- npm o yarn

### Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/authnestjs.git
cd authnestjs
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

```bash
cp .env.example .env
# Editar .env con tus configuraciones
```

4. **Iniciar base de datos con Docker**

```bash
docker-compose up -d
```

5. **Ejecutar la aplicación**

```bash
# Modo desarrollo
npm run start:dev

# Modo producción
npm run build
npm run start:prod
```

## 📖 Documentación API

Una vez iniciada la aplicación, accede a la documentación interactiva de Swagger:

```
http://localhost:3000/api
```

### Endpoints Principales

#### Autenticación

**POST /auth/register**

```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "password": "password123"
}
```

**POST /auth/login**

```json
{
  "email": "juan@example.com",
  "password": "password123"
}
```

Respuesta:

```json
{
  "message": "Login exitoso",
  "usuario": {
    "id": 1,
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Usuarios (requieren autenticación)

**GET /usuarios** - Listar todos los usuarios

**GET /usuarios/:id** - Obtener un usuario

**PATCH /usuarios/:id** - Actualizar usuario

**DELETE /usuarios/:id** - Eliminar usuario

### Autenticación con JWT

Para endpoints protegidos, incluye el token en el header:

```bash
Authorization: Bearer <tu-token-jwt>
```

## 🛠️ Stack Tecnológico

| Tecnología          | Versión | Propósito                    |
| ------------------- | ------- | ---------------------------- |
| **NestJS**          | ^11.0   | Framework backend            |
| **TypeScript**      | ^5.7    | Lenguaje tipado              |
| **TypeORM**         | ^0.3    | ORM para base de datos       |
| **PostgreSQL**      | 16      | Base de datos relacional     |
| **JWT**             | ^10.2   | Autenticación con tokens     |
| **Bcrypt**          | ^6.0    | Hash de contraseñas          |
| **Class Validator** | ^0.14   | Validación de DTOs           |
| **Passport**        | ^0.7    | Estrategias de autenticación |
| **Swagger**         | ^11.2   | Documentación API            |
| **Throttler**       | ^7.0    | Rate limiting                |

## 📁 Estructura del Proyecto

```
src/
├── auth/                    # Módulo de autenticación
│   ├── dto/                # DTOs de login y registro
│   ├── guards/             # JWT Auth Guard
│   ├── interfaces/         # Interfaces JWT
│   ├── strategies/         # JWT Strategy
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── auth.module.ts
├── usuarios/               # Módulo de usuarios
│   ├── dto/               # DTOs de usuario
│   ├── entities/          # Entidad Usuario
│   ├── usuarios.controller.ts
│   ├── usuarios.service.ts
│   └── usuarios.module.ts
├── app.module.ts          # Módulo principal
└── main.ts               # Punto de entrada
```

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env` basado en `.env.example`:

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=usuarios_db

# JWT
JWT_SECRET=tu-secreto-super-seguro
JWT_EXPIRATION=1d

# Application
PORT=3000
NODE_ENV=development
```

### Docker Compose

El proyecto incluye PostgreSQL, pgAdmin y Adminer:

```bash
# Iniciar servicios
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down
```

**Accesos:**

- **pgAdmin**: http://localhost:5050 (admin@admin.com / admin)
- **Adminer**: http://localhost:8080

## 🧪 Testing

```bash
# Tests unitarios
npm run test

# Tests e2e
npm run test:e2e

# Cobertura
npm run test:cov
```

## 📝 Scripts Disponibles

```bash
npm run start          # Iniciar en modo normal
npm run start:dev      # Iniciar en modo desarrollo (watch)
npm run start:prod     # Iniciar en modo producción
npm run build          # Compilar proyecto
npm run lint           # Ejecutar linter
npm run format         # Formatear código con Prettier
```

## 🔐 Seguridad

Este proyecto implementa múltiples capas de seguridad:

1. **Contraseñas**: Hasheadas con bcrypt (10 rounds)
2. **JWT**: Tokens firmados con secreto configurable
3. **Validación**: Validación automática de todos los inputs
4. **Rate Limiting**: Máximo 10 requests por minuto
5. **CORS**: Configuración de orígenes permitidos
6. **Serialización**: Exclusión automática de campos sensibles

## 🚀 Despliegue

### Producción

1. Configurar variables de entorno de producción
2. Desactivar `synchronize` en TypeORM
3. Usar un secreto JWT fuerte y único
4. Configurar HTTPS
5. Implementar logging robusto

```bash
npm run build
npm run start:prod
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Marcelo Emmott**

- GitHub: [@marceloemmott](https://github.com/marceloemmott)
- LinkedIn: [Marcelo Emmott](https://linkedin.com/in/marceloemmott)

## 🙏 Agradecimientos

- [NestJS](https://nestjs.com/) - Framework increíble
- [TypeORM](https://typeorm.io/) - ORM potente y flexible
- Comunidad de código abierto

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!
