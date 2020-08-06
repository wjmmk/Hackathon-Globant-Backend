import { Injectable } from '@nestjs/common';
import { Trader } from './entities/trade.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTradesDto } from './dto/create-trades-dto';

@Injectable()
export class TradesService {

    constructor(
        @InjectRepository(Trader)
        private tradeRepository: Repository<Trader>
      ) {}

      async getAll(): Promise<Trader[]> {
          return await this.tradeRepository.find();
      }

      async getTrader(id: number): Promise<Trader> {
        return await this.tradeRepository.findOne(id);
      }

      async createTrader(traderNew: CreateTradesDto): Promise<Trader> {
          const newTrader = new Trader();
          newTrader.status = traderNew.status;
          newTrader.service = traderNew.service;
          newTrader.concurrence = traderNew.concurrence;
          newTrader.userAskingId = traderNew.userAskingId;
          newTrader.trade = traderNew.trade;
          
          return this.tradeRepository.save(newTrader);
      }

      async updateTrader(idTrader: number, traderActualizar: CreateTradesDto): Promise<Trader> {
          const userUpdate = await this.tradeRepository.findOne(idTrader);
          userUpdate.status = traderActualizar.status;
          userUpdate.service = traderActualizar.service;
          userUpdate.concurrence = traderActualizar.concurrence;
          userUpdate.userAskingId = traderActualizar.userAskingId;
          userUpdate.trade = traderActualizar.trade;

          return await this.tradeRepository.save(userUpdate);
      }

      async deleteTrader(idTrader: number): Promise<any> {
          return await this.tradeRepository.delete(idTrader);
      }
}
