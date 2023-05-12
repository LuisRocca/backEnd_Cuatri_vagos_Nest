import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
// librerias de coneccion a la db 
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Connection } from 'typeorm';


@Module({
  
  imports: [TypeOrmModule.forRoot(
    {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: '123456',
    database: 'postgres',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
  }
  ),
  RoomsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private connection: Connection) {
  //   console.log(Connection)
  // }
}
