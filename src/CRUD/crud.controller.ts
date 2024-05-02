import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CRUDService } from './crud.service';
import { createTodoTDo } from "./Dtos/create-dto.dto";

@Controller('crud')
export class CRUDController {
    constructor(private readonly crudService: CRUDService) {}

    @Post()
    create(@Body() dto: createTodoTDo) {
        return this.crudService.create(dto);
    }

    @Get()
    findMany() {
        return this.crudService.findMany();
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() dto: createTodoTDo) {
        return this.crudService.update(id,dto);
    }

    @Delete(':id')
    delete(@Param('id') id:number) {
        return this.crudService.delete(id);
    }
}