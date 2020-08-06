import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Match {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type:'varchar' })
    status: string;
  
    @Column({ type: 'numeric' })
    tradeId: number;

    @Column({ type: 'numeric' })
    userAcceptsId: number;
  
    @Column({ type: 'numeric' })
    tradeScore: number;

    @Column({ type: 'numeric' })
    userScore: number;
}
