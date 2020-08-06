import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text')
    name: string;
  
    @Column({ type: 'date' })
    birthdate: Date;

    @Column('text')
    address: string;
  
    @Column('text')
    city: string;

    @Column('text')
    email: string;

    @Column('text')
    avatar: string;

    @Column({ type: 'numeric' })
    miles: number;
}
