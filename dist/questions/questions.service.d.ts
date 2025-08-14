import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
export declare class QuestionsService {
    private readonly repo;
    constructor(repo: Repository<Question>);
    create(dto: CreateQuestionDto): Promise<Question>;
    findAll(): Promise<Question[]>;
    findOne(id: number): Promise<Question>;
    update(id: number, dto: UpdateQuestionDto): Promise<Question>;
    remove(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
