import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @ApiProperty({ example: 1, description: 'ID único del usuario' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Juan Pérez', description: 'Nombre completo del usuario' })
  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @ApiProperty({ example: 'juan@example.com', description: 'Email del usuario' })
  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Exclude() // Excluir la contraseña de todas las respuestas
  @Column({ type: 'varchar', length: 255 })
  password: string;

  @ApiProperty({ example: '2024-01-01T00:00:00Z', description: 'Fecha de creación' })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({ example: '2024-01-01T00:00:00Z', description: 'Fecha de última actualización' })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
