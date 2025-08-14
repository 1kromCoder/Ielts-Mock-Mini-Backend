import { IsArray, IsInt, IsString, Length, ArrayMinSize, ArrayMaxSize } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty()
  @IsString()
  @Length(5, 500)
  text: string;

  @ApiProperty({ type: [String], minItems: 4, maxItems: 4 })
  @IsArray()
  @ArrayMinSize(4)
  @ArrayMaxSize(4)
  options: string[];

  @ApiProperty({ example: 1 })
  @IsInt()
  correctIndex: number;
}
