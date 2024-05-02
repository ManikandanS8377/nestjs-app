import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CRUD } from "./crud.entity";
import { CRUDController } from "./crud.controller";
import { CRUDService } from "./crud.service";

@Module({
    imports: [TypeOrmModule.forFeature([CRUD])],
    controllers: [CRUDController],
    providers: [CRUDService],
})
export class CRUDModule {}