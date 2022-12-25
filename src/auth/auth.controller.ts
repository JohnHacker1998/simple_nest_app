import { Controller, Post } from "@nestjs/common";
import { Body } from "@nestjs/common/decorators/http/route-params.decorator";
import { AuthService } from "./auth.service";
import { SignInDto, SignUpDto } from "./dtos/auth.dto";


@Controller('auth')
export class AuthController{
constructor(private authService:AuthService){}
@Post('signup')
signup(@Body() signUpDto:SignUpDto){
    return this.authService.signup(signUpDto)
}
@Post('signin')
signin(@Body() signInDto:SignInDto){
return this.authService.signin(signInDto)
}
}