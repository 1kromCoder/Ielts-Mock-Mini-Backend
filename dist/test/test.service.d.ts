import { Repository } from 'typeorm';
import { Question } from '../questions/question.entity';
export declare class TestService {
    private readonly repo;
    constructor(repo: Repository<Question>);
    getRandomQuestions(limit?: number): Promise<any>;
    calculateResult(answers: {
        questionId: number;
        selectedIndex: number;
    }[]): Promise<{
        total: number;
        correct: number;
        percent: number;
        results: {
            questionId: number;
            selectedIndex: number;
            correctIndex: any;
            isCorrect: boolean;
        }[];
    }>;
}
