import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  welcome() {
    return {
      data: {
        msg: "welcome"
      }
    }
  }
}