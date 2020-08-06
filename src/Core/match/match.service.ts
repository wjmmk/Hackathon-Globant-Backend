import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Match } from './entities/match.entity';
import { CreateMatchDto } from './dto/create-match-dto';

@Injectable()
export class MatchService {

    constructor(
        @InjectRepository(Match)
        private matchRepository: Repository<Match>
      ) {}

      async getAll(): Promise<Match[]> {
          return await this.matchRepository.find();
      }

      async getMatch(id: number): Promise<Match> {
        return await this.matchRepository.findOne(id);
      }

      async createMatch(matchNuevo: CreateMatchDto): Promise<Match> {
          const nuevo = new Match();
          nuevo.status = matchNuevo.status;
          nuevo.tradeId = matchNuevo.tradeId;
          nuevo.userAcceptsId = matchNuevo.userAcceptsId;
          nuevo.tradeScore = matchNuevo.tradeScore;
          nuevo.userScore = matchNuevo.userScore;
          
          return this.matchRepository.save(nuevo);
      }

      async updateMatch(idMatch: number, matchActualizar: CreateMatchDto): Promise<Match> {
          const userUpdate = await this.matchRepository.findOne(idMatch);
          userUpdate.status = matchActualizar.status;
          userUpdate.tradeId = matchActualizar.tradeId;
          userUpdate.userAcceptsId = matchActualizar.userAcceptsId;
          userUpdate.tradeScore = matchActualizar.tradeScore;
          userUpdate.userScore = matchActualizar.userScore;

          return await this.matchRepository.save(userUpdate);
      }

      async deleteMatch(idMatch: number): Promise<any> {
          return await this.matchRepository.delete(idMatch);
      }
}
