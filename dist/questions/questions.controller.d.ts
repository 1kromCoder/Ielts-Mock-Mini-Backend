import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
export declare class QuestionsController {
    private readonly service;
    constructor(service: QuestionsService);
    create(dto: CreateQuestionDto): Promise<import("./question.entity").Question>;
    findAll(): Promise<import("./question.entity").Question[]>;
    findOne(id: number): Promise<import("./question.entity").Question>;
    update(id: number, dto: UpdateQuestionDto): Promise<import("./question.entity").Question>;
    remove(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
