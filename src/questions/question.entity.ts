import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Question {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  text: string;

  @ApiProperty({ type: [String], example: ['A','B','C','D'] })
  @Column('text', { array: true })
  options: string[];

  @ApiProperty({ example: 1, description: '0..3' })
  @Column()
  correctIndex: number;
}
