import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { RoomRepository } from './room.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoomRepository,Room])],
  controllers: [RoomsController],
  providers: [RoomsService],
  // exports: [RoomsService]
})
export class RoomsModule {}
