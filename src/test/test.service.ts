import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Question } from '../questions/question.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Question)
    private readonly repo: Repository<Question>,
  ) {}

  async getRandomQuestions(limit = 20) {
    const qb = this.repo.createQueryBuilder('q').orderBy('RANDOM()').limit(limit);
    const list = await qb.getMany();
    return list.map(q => ({ id: q.id, text: q.text, options: q.options }));
  }

  async calculateResult(answers: { questionId: number; selectedIndex: number }[]) {
    if (!Array.isArray(answers) || answers.length === 0) {
      return { total: 0, correct: 0, percent: 0, results: [] };
    }
    const ids = answers.map(a => a.questionId);
    const questions = await this.repo.findBy({ id: In(ids) });
    let correct = 0;
    const results = answers.map(a => {
      const q = questions.find(x => x.id === a.questionId);
      const isCorrect = q ? a.selectedIndex === q.correctIndex : false;
      if (isCorrect) correct++;
      return {
        questionId: a.questionId,
        selectedIndex: a.selectedIndex,
        correctIndex: q?.correctIndex ?? null,
        isCorrect,
      };
    });
    const total = answers.length;
    const percent = total ? Math.round((correct / total) * 100) : 0;
    return { total, correct, percent, results };
  }
}
