import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trader } from './entities/trade.entity';
import { TradesController } from './trades.controller';
import { TradesService } from './trades.service';

@Module({
  imports: [TypeOrmModule.forFeature([Trader])],
  exports: [TypeOrmModule],
  controllers: [TradesController],
  providers: [TradesService]
})
export class TradesModule {}
