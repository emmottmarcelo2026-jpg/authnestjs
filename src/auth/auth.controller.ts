import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ 
    summary: 'Registrar un nuevo usuario',
    description: 'Crea un nuevo usuario en el sistema. La contraseña será hasheada automáticamente con bcrypt.'
  })
  @ApiResponse({ status: 201, description: 'Usuario registrado exitosamente. Retorna el usuario y un token JWT.' })
  @ApiResponse({ status: 400, description: 'Email ya registrado o datos inválidos' })
  @ApiResponse({ status: 429, description: 'Demasiadas solicitudes - Rate limit excedido' })
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @ApiOperation({ 
    summary: 'Iniciar sesión',
    description: 'Autentica un usuario y retorna un token JWT válido por 24 horas.'
  })
  @ApiResponse({ status: 200, description: 'Login exitoso. Retorna el usuario y un token JWT.' })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas - Email o contraseña incorrectos' })
  @ApiResponse({ status: 429, description: 'Demasiadas solicitudes - Rate limit excedido' })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
