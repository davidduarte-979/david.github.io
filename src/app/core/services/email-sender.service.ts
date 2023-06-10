import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EmailSender } from '@core/models/emailSender';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {
  private http = inject(HttpClient)

  sendEmail(body: EmailSender<any>, template?: string) {
    let params = new HttpParams();
    params = params.append('templateType', template);
    return this.http.post(`${environment.API_BASE_URL}/${environment.API_VERSION}/email`, body, {
      params
    })
  }
}
