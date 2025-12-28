# Contribuyendo a NestJS Authentication API

¡Gracias por tu interés en contribuir! Este documento proporciona pautas para contribuir al proyecto.

## 🚀 Cómo Contribuir

### 1. Fork el Proyecto

Haz un fork del repositorio y clónalo localmente:

```bash
git clone https://github.com/tu-usuario/authnestjs.git
cd authnestjs
```

### 2. Crea una Rama

Crea una rama para tu feature o bugfix:

```bash
git checkout -b feature/mi-nueva-caracteristica
# o
git checkout -b fix/correccion-de-bug
```

### 3. Realiza tus Cambios

- Escribe código limpio y legible
- Sigue las convenciones de TypeScript y NestJS
- Agrega comentarios cuando sea necesario
- Asegúrate de que el código pase el linter

### 4. Commits

Usa mensajes de commit descriptivos siguiendo [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: agregar nueva funcionalidad
fix: corregir bug en autenticación
docs: actualizar README
style: formatear código
refactor: refactorizar servicio de usuarios
test: agregar tests para auth service
chore: actualizar dependencias
```

### 5. Push y Pull Request

```bash
git push origin feature/mi-nueva-caracteristica
```

Luego abre un Pull Request en GitHub con:

- Descripción clara de los cambios
- Referencias a issues relacionados
- Screenshots si aplica

## 📋 Estándares de Código

### TypeScript

- Usa tipos explícitos
- Evita `any` cuando sea posible
- Usa interfaces para objetos complejos

### NestJS

- Sigue la arquitectura modular
- Usa decoradores apropiados
- Implementa DTOs para validación
- Usa inyección de dependencias

### Formato

```bash
npm run lint      # Verificar linting
npm run format    # Formatear código
```

## 🧪 Testing

Antes de enviar un PR, asegúrate de que:

- El código compila sin errores
- Los tests existentes pasan
- Agregas tests para nuevas funcionalidades

```bash
npm run test
npm run test:e2e
```

## 📝 Documentación

- Actualiza el README si es necesario
- Documenta nuevos endpoints en Swagger
- Agrega comentarios JSDoc para funciones complejas

## ❓ Preguntas

Si tienes preguntas, abre un issue con la etiqueta `question`.

## 📜 Código de Conducta

- Sé respetuoso con otros contribuidores
- Acepta críticas constructivas
- Enfócate en lo mejor para el proyecto

¡Gracias por contribuir! 🎉
