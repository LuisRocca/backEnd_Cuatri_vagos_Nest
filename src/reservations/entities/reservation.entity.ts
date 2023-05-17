import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from 'src/rooms/entities/room.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';

TypeOrmModule.forRoot()
@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dayarrival: string;

  @Column()
  daydeparture: string;

  @Column()
  timearrival: string;

  @Column()
  departuretime: string;

  @ManyToOne(() => Room, room => room.reservations)
  room_: Room;
}
