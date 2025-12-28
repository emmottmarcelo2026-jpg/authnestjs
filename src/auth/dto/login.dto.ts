import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'juan@example.com', description: 'Email del usuario' })
  @IsNotEmpty({ message: 'El email es obligatorio' })
  @IsEmail({}, { message: 'Debe proporcionar un email válido' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'Contraseña del usuario' })
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  @IsString({ message: 'La contraseña debe ser un texto' })
  password: string;
}
