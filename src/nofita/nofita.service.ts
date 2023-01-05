import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';
import { GetAuthToken, GetToken } from './dto/get-token.dto';

@Injectable()
export class NofitaService {
  constructor(private readonly httpService: HttpService) {}
  private readonly url1 = 'https://apigwsit.telkom.co.id:7777/invoke/pub.apigateway.oauth2/getAccessToken';
  private readonly url2 = 'https://apigwsit.telkom.co.id:7777/gateway/telkom-notifplatform/1.0/auth/get-token';
  private readonly url3 = 'https://apigwsit.telkom.co.id:7777/gateway/telkom-notifplatform/1.0/apiNotif/api/send-sms/v2';

  findAll() {
    return `This action returns all nofita`;
  }

  async getTokenApigwsit(data: GetToken) {
    const res = await this.httpService.axiosRef.post(this.url1, data).then(function (response) {
      // console.log(response.data);
      return response.data
    });
    return {...res}; 
  }

  async getAuthToken(data: GetAuthToken) {
    const token = data.bearer;
    const config = {headers: { Authorization: `Bearer ${token}` }}
    const res = await this.httpService.axiosRef.post(this.url2, data.payload, config).then(function (response) {
      return response.data
    });
    return {...res}; 
  }

  async sendSMS(data: GetAuthToken) {
    const token = data.bearer;
    const config = {headers: { Authorization: `Bearer ${token}` }}
    const res = await this.httpService.axiosRef.post(this.url3, data.payload, config).then(function (response) {
      return response.data
    });
    return {...res};
  }

}
