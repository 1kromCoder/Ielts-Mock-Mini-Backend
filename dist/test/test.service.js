"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const question_entity_1 = require("../questions/question.entity");
let TestService = class TestService {
    constructor(repo) {
        this.repo = repo;
    }
    async getRandomQuestions(limit = 20) {
        const qb = this.repo.createQueryBuilder('q').orderBy('RANDOM()').limit(limit);
        const list = await qb.getMany();
        return list.map(q => ({ id: q.id, text: q.text, options: q.options }));
    }
    async calculateResult(answers) {
        if (!Array.isArray(answers) || answers.length === 0) {
            return { total: 0, correct: 0, percent: 0, results: [] };
        }
        const ids = answers.map(a => a.questionId);
        const questions = await this.repo.findBy({ id: (0, typeorm_2.In)(ids) });
        let correct = 0;
        const results = answers.map(a => {
            const q = questions.find(x => x.id === a.questionId);
            const isCorrect = q ? a.selectedIndex === q.correctIndex : false;
            if (isCorrect)
                correct++;
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
};
exports.TestService = TestService;
exports.TestService = TestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(question_entity_1.Question)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TestService);
//# sourceMappingURL=test.service.js.map