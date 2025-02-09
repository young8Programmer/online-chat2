import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatModule } from './chat/chat.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: "postgresql://postgres:GufBxEipUYYmAZrIRRZzuzGnHlIUcLis@autorack.proxy.rlwy.net:27915/railway",
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      }
    }),
    ChatModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // frontend fayllar joylashgan papka
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
