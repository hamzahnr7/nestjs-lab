import { Controller, Get, Post, Body } from '@nestjs/common';
import { NofitaService } from './nofita.service';
import { GetAuthToken, GetToken } from './dto/get-token.dto';

@Controller('nofita')
export class NofitaController {
  constructor(private readonly nofitaService: NofitaService) {}

  @Get()
  findAll() {
    return this.nofitaService.findAll();
  }

  @Post('/get-token-apigwsit')
  getTokenApigwsit(@Body() clientData: GetToken) {
    return this.nofitaService.getTokenApigwsit(clientData);
  }
  
  @Post('/get-auth-token')
  getAuthToken(@Body() clientData: GetAuthToken) {
    return this.nofitaService.getAuthToken(clientData);
  }

  @Post('/send-sms')
  sendSMS(@Body() clientData: GetAuthToken) {
    return this.nofitaService.sendSMS(clientData);
  }
  
}
