import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt } from 'class-validator';
export class CreateUserDto {
  @ApiProperty()
  @IsInt({ message: 'id应为数字' })
  @IsNotEmpty({ message: 'id不为空' })
  readonly id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  nickname: string;
  @ApiProperty()
  password: string;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  createTime: Date;

  @ApiProperty()
  updateTime: Date;
}
