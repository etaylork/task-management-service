import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUpRequest(@Body() authDto: AuthCredentialsDto): Promise<void> {
    return this.authService.SignUp(authDto);
  }

  @Get('/signin')
  async signInRequest(
    @Body() authDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authDto);
  }
}
