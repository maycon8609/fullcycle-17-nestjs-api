import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: '123456',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
})
export class AuthModule {}
