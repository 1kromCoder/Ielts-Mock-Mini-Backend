import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private readonly repo: Repository<Question>,
  ) {}

  create(dto: CreateQuestionDto) {
    const q = this.repo.create(dto);
    return this.repo.save(q);
  }

  async findAll() {
    return this.repo.find({ order: { id: 'DESC' } });
  }

  async findOne(id: number) {
    const q = await this.repo.findOne({ where: { id } });
    if (!q) throw new NotFoundException('Question not found');
    return q;
  }

  async update(id: number, dto: UpdateQuestionDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const q = await this.findOne(id);
    await this.repo.remove(q);
    return { deleted: true, id };
  }
}
