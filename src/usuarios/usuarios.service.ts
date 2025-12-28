import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    // Hashear la contraseña antes de guardar
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(createUsuarioDto.password, saltRounds);
    
    const nuevoUsuario = this.usuarioRepository.create({
      ...createUsuarioDto,
      password: hashedPassword,
    });
    
    return await this.usuarioRepository.save(nuevoUsuario);
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return usuario;
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    return await this.usuarioRepository.findOne({ where: { email } });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findOne(id);
    
    // Si se está actualizando la contraseña, hashearla
    if (updateUsuarioDto.password) {
      const saltRounds = 10;
      updateUsuarioDto.password = await bcrypt.hash(updateUsuarioDto.password, saltRounds);
    }
    
    Object.assign(usuario, updateUsuarioDto);
    return await this.usuarioRepository.save(usuario);
  }

  async remove(id: number): Promise<{ message: string }> {
    const usuario = await this.findOne(id);
    await this.usuarioRepository.remove(usuario);
    return { message: `Usuario con ID ${id} eliminado exitosamente` };
  }
}
