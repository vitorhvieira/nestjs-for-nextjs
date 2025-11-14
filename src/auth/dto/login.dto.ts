import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @IsNotEmpty({ message: 'Senha não pode estar vazia' })
  @IsString({ message: 'Senha precisa ser uma string' })
  password: string;
}
