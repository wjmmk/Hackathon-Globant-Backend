import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './Core/users/users.module';
import { TradesModule } from './Core/trades/trades.module';
import { MatchModule } from './Core/match/match.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    UsersModule,
    TradesModule,
    MatchModule
  ],
})
export class AppModule {}
