import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './configs/typeorm.config';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { DepartmentModule } from './modules/department/department.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, ProductsModule, DepartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
