import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty({ example: 'Juan Pérez', description: 'Nombre completo del usuario' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser un texto' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  @MaxLength(100, { message: 'El nombre no puede exceder 100 caracteres' })
  nombre: string;

  @ApiProperty({ example: 'juan@example.com', description: 'Email del usuario' })
  @IsNotEmpty({ message: 'El email es obligatorio' })
  @IsEmail({}, { message: 'Debe proporcionar un email válido' })
  @MaxLength(255, { message: 'El email no puede exceder 255 caracteres' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'Contraseña del usuario (mínimo 6 caracteres)' })
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  @IsString({ message: 'La contraseña debe ser un texto' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  @MaxLength(50, { message: 'La contraseña no puede exceder 50 caracteres' })
  password: string;
}
