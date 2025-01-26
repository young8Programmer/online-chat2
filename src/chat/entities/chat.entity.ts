import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("chatMessage")
export class ChatMessage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  message: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
