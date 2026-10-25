import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { PostModule } from './post/post.module.js';
import { ChatModule } from './chat/app.module.js';
import { MessageController } from './message/message.controller.js';
import { MessageService } from './message/message.service.js';
import { MessageModule } from './message/message.module.js';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [UserModule, PostModule, ChatModule, MessageModule, ConfigModule.forRoot({
    envFilePath: "./config/.env",
    isGlobal: true,
    // validationSchema: Joi.object({
    //   PORT: Joi.number().required(),
    //   DB_URL: Joi.string().required()
    // })
  })],
  controllers: [AppController, MessageController],
  providers: [AppService, MessageService],
})
export class AppModule {}
