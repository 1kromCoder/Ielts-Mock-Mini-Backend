import { TestService } from './test.service';
export declare class TestController {
    private readonly service;
    constructor(service: TestService);
    getQuestions(limit?: number): Promise<{
        id: number;
        text: string;
        options: string[];
    }[]>;
    submit(payload: {
        answers: {
            questionId: number;
            selectedIndex: number;
        }[];
    }): Promise<{
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
