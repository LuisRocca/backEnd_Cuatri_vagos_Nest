import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomRepository } from './room.repository';
import { Room } from './entities/room.entity';

@Injectable()

export class RoomsService {
  constructor( @InjectRepository(RoomRepository) private roomRepository: RoomRepository ){}

  db = this.roomRepository.manager;

  async create(createRoomDto: CreateRoomDto) {
    const {roomName, reservation} = createRoomDto;
    const response = await this.roomRepository.manager.query(`INSERT INTO room (roomname) VALUES ('${roomName}');`);   
    return response;
  }

  async findAll(): Promise<Room[]> {
    return await this.db.query('select * from room');;
  }

  async findOne(id: number) {
    return await this.db.query(`SELECT * FROM room WHERE id = ${id}`);
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    const { roomName, reservation } = updateRoomDto;
    console.log(reservation == undefined ? '1' : '2')
    return await this.db.query(`UPDATE room SET roomname = '${roomName}', reservations = '{${reservation}}' WHERE id = ${id}`);
  }

  async remove(id: Number) {
  return await this.db.query(`DELETE FROM room WHERE id = ${id}`);
  }
}
