import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListsModule } from './lists/lists.module';
import { ItemsModule } from './items/items.module';
import { SharedModule } from './shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { List } from './lists/entities/list.entity';
import { Item } from './items/entities/item.entity';

@Module({
  imports: [ListsModule, ItemsModule, SharedModule,
    TypeOrmModule.forRoot({
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'admin',
    password: 'admin',
    database: 'ToDoApp',
    entities: [User,List,Item],
    synchronize: true,
    options: {
      encrypt: false,
      cryptoCredentialsDetails: {
        minVersion: 'TLSv1'
      }
    }
  }),
    UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

