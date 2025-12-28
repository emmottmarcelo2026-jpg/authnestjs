import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UsuariosService } from '../usuarios/usuarios.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    // Verificar si el email ya existe
    const emailExists = await this.usuariosService.findByEmail(registerDto.email);
    
    if (emailExists) {
      throw new BadRequestException('El email ya está registrado');
    }

    // Crear el usuario
    const nuevoUsuario = await this.usuariosService.create(registerDto);
    
    // Generar JWT token
    const payload: JwtPayload = {
      sub: nuevoUsuario.id,
      email: nuevoUsuario.email,
      nombre: nuevoUsuario.nombre,
    };
    const accessToken = this.jwtService.sign(payload);
    
    // Retornar sin la contraseña
    const { password, ...resultado } = nuevoUsuario;
    return {
      message: 'Usuario registrado exitosamente',
      usuario: resultado,
      accessToken,
    };
  }

  async login(loginDto: LoginDto) {
    // Buscar usuario por email
    const usuario = await this.usuariosService.findByEmail(loginDto.email);

    if (!usuario) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Verificar contraseña usando bcrypt
    const passwordMatch = await bcrypt.compare(loginDto.password, usuario.password);
    
    if (!passwordMatch) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Generar JWT token
    const payload: JwtPayload = {
      sub: usuario.id,
      email: usuario.email,
      nombre: usuario.nombre,
    };
    const accessToken = this.jwtService.sign(payload);

    // Retornar sin la contraseña
    const { password, ...resultado } = usuario;
    return {
      message: 'Login exitoso',
      usuario: resultado,
      accessToken,
    };
  }
}
