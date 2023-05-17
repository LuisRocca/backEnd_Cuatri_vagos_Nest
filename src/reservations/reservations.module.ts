import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { ReservationRepository } from './reservations.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';


@Module({
  imports : [TypeOrmModule.forFeature([ReservationRepository,Reservation])],
  controllers: [ReservationsController],
  providers: [ReservationsService]
})
export class ReservationsModule {}
