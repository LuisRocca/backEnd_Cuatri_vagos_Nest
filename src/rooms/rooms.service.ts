import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomRepository } from './room.repository';
import { Room } from './entities/room.entity';

let dbRooms = [
  {id: 1 ,roomName: 'el solar', Reservation: [], },
  {id: 2 ,roomName: 'el parpal', Reservation: [], },
  {id: 3 ,roomName: 'el menecune', Reservation: [], },
  {id: 4 ,roomName: 'el carcajito', Reservation: [], },
];

@Injectable()


export class RoomsService {
  constructor( @InjectRepository(RoomRepository) private roomRepository: RoomRepository ){}

  create(createRoomDto: CreateRoomDto) {
    const {roomName, Reservation} = createRoomDto;
    const newRoom = {id: dbRooms.length + 1 ,roomName: roomName.toString(), Reservation: Reservation, }
    dbRooms.push(
      newRoom
    )
    return newRoom;
  }

  // async findAll() {
  //   console.log('estamos')
  //   return await this.roomRepository.find();
  // }
  async findAll(): Promise<Room[]> {
    console.log(await this.roomRepository, "<---este es mi console log")
    return await this.roomRepository.find();
  }

  findOne(id: number) {
    return dbRooms.find(e => e.id === id);
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    const {roomName, Reservation} = updateRoomDto;
    const roomUpdate = dbRooms.find(e => e.id === id);
    roomUpdate['Reservation'] = Reservation
    roomUpdate['roomName'] = roomName.toString();
    return roomUpdate;
  }

  remove(id: Number) {
    const roomRemove = dbRooms.find(e => e.id === id);
   const resultado = [];
      for (var i = 0; i < dbRooms.length; i++) {
        if (dbRooms[i].id !== id) {
          resultado.push(dbRooms[i]);
        }
      }      
    dbRooms = resultado;
    return `This action removes a room id: ${id} room`;
  }
}
