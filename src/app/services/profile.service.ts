import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GeneralInfo} from '@app/models/domain.model';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {handleError} from '@app/shared/helpers';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profilesUrl = '/api/';

  constructor(
    private http: HttpClient) { }

  getGeneralInfo(): Observable<GeneralInfo> {
    return this.http.get<GeneralInfo>(`${this.profilesUrl}general-informations/1`, httpOptions).pipe(catchError(handleError));
    // getGeneralinformation
  }

  saveGeneralInfo(generalInfo: GeneralInfo): Observable<GeneralInfo> {
    if (generalInfo.id === null) {
      return this.http.post<GeneralInfo>(`${this.profilesUrl}general-informations`, generalInfo, httpOptions).pipe(catchError(handleError));
    } else {
      return this.http.put<GeneralInfo>(`${this.profilesUrl}general-informations`, generalInfo, httpOptions).pipe(catchError(handleError));
    }
    // createGeneralinformation
  }

  removeGeneralInfo(id: number): Observable<{}> {
    return this.http.delete(`${this.profilesUrl}general-informations/${id}`).pipe(catchError(handleError));
    // deleteGeneralinformation
  }
}
