import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatMessage } from './entities/chat.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatMessage)
    private chatMessageRepository: Repository<ChatMessage>,
  ) {}

  async saveMessage(username: string, message: string): Promise<ChatMessage> {
    const newMessage = this.chatMessageRepository.create({
      username,
      message,
    });
    return this.chatMessageRepository.save(newMessage);
  }

  async getMessages(): Promise<ChatMessage[]> {
    return this.chatMessageRepository.find();
  }
}
