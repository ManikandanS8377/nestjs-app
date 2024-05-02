import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CRUD } from './crud.entity';
import { createTodoTDo } from './Dtos/create-dto.dto';

@Injectable()
export class CRUDService {
    constructor(
        @InjectRepository(CRUD) private readonly repository: Repository<CRUD>,
    ) {}

    async create(dto: createTodoTDo): Promise<CRUD> {
        const todo = this.repository.create(dto);

        return await this.repository.save(todo);
    }

    findMany(){
        // return this.repository.find({where:{id:1} });
        return this.repository.find();
    }

    async update(id: number , dto: createTodoTDo) {
        const todo = await this.repository.findOne({where: {id} });

        Object.assign(todo, dto)

        return await this.repository.save(todo);
    }

    async delete(id: number) {
        const todo = await this.repository.findOne({where: {id} });

        return await this.repository.remove(todo);
    }
}