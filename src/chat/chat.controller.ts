import { Controller, Get, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('message')
  async saveMessage(@Body() body: { username: string; message: string }) {
    return this.chatService.saveMessage(body.username, body.message);
  }

  @Get('messages')
  async getMessages() {
    return this.chatService.getMessages();
  }
}
