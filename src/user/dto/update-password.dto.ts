import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePasswordDto {
  @IsNotEmpty({ message: 'Senha não pode estar vazia' })
  @IsString({ message: 'Senha precisa ser uma string' })
  currentPassword: string;

  @IsNotEmpty({ message: 'Senha não pode estar vazia' })
  @IsString({ message: 'Senha precisa ser uma string' })
  newPassword: string;
}
