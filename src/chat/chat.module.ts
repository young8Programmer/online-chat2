import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ChatMessage } from './entities/chat.entity';
import { ChatGateway } from 'src/chat.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([ChatMessage])],
  providers: [ChatService, ChatGateway],
  controllers: [ChatController],
  exports: [ChatService],
})
export class ChatModule {}
