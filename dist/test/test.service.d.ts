import { Repository } from 'typeorm';
import { Question } from '../questions/question.entity';
export declare class TestService {
    private readonly repo;
    constructor(repo: Repository<Question>);
    getRandomQuestions(limit?: number): Promise<{
        id: number;
        text: string;
        options: string[];
    }[]>;
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
            correctIndex: number | null;
            isCorrect: boolean;
        }[];
    }>;
}
