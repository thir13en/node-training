import { EMPTY, Observable } from 'rxjs';

import { ApiService } from '@services/api.service';


export class ApiServiceMock {
  get(param?: any): Observable<any> {
    return EMPTY;
  }

  put(param?: any): any {
    return 'EMPTY';
  }

  post(param?: any): Observable<any> {
    return EMPTY;
  }
}

export const API_SERVICE_MOCK_PROVIDER = { provide: ApiService, useClass: ApiServiceMock };
