import { Body, Controller, Get, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service.js";
import { MyPipe } from "../common/pipes/pipe.js";
import { createUserQuerySchema, type CreateUserDto } from "./user.validation.js";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService){}
  
  @Get()
  welcome(@Body() body: CreateUserDto, @Query({schema: createUserQuerySchema}) query: string): { data: { msg: string; }; } {
    return this.userService.welcome()
  }
}