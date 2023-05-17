import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from 'src/reservations/entities/reservation.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
TypeOrmModule.forRoot()
@Entity()
export class Room {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    roomname: String;

    @OneToMany(() => Reservation, reservation => reservation.room_)
    reservations?: Reservation[];
}
