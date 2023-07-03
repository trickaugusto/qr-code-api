import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const user = process.env.USER_MONGO;
const password = process.env.PASS_MONGO;
const database = process.env.DB_MONGO;

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${user}:${password}@cluster0.7e4cmuu.mongodb.net/${database}?retryWrites=true&w=majority`,
    ),
  ],
})
export class DatabaseModule {}
