import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
export declare class QuestionsController {
    private readonly service;
    constructor(service: QuestionsService);
    create(dto: CreateQuestionDto): any;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, dto: UpdateQuestionDto): Promise<any>;
    remove(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
