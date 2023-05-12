import { TypeOrmModule } from '@nestjs/typeorm';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
TypeOrmModule.forRoot()
@Entity()
export class Room {
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    roomname: String;
    @Column({ type: 'text' })
    reservations?: String;
}
