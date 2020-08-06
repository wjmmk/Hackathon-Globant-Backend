import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Trader {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text')
    status: string;
  
    @Column('text')
    service: string;

    @Column({ type: 'boolean'})
    concurrence: boolean;
  
    @Column('text')
    userAskingId: string;

    @Column('text')
    trade: string;
}
