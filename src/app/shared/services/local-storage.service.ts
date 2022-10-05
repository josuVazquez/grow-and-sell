import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setData(key: string, data: any) {
    const dataJson = JSON.stringify(data);
    localStorage.setItem(key, dataJson);
  }

  getData(key: string) {
    return localStorage.getItem(key);
  }

  removeData(key: string) {
    return localStorage.removeItem(key);
  }
}
