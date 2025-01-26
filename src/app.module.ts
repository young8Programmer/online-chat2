import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatModule } from './chat/chat.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL || "postgresql://postgresql_9eoz_user:Xp2A37RfR5ypHiWckZY6GsOohzndOCnm@dpg-cu6iq1dsvqrc738j18c0-a.oregon-postgres.render.com/postgresql_9eoz",
      autoLoadEntities: true,
      synchronize: true,
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
