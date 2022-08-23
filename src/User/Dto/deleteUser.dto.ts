import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt } from 'class-validator';
export class DeleteUserDto {
  @ApiProperty()
  @IsInt({ message: 'id应为数字' })
  @IsNotEmpty({ message: 'id不为空' })
  readonly id: number;
}
