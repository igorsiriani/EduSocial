import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage: Storage) { }

  async databaseCreate() {
    this.storage.create();
  }

    /**
   * Saves a data in the storage using a key
   *
   * @param key the key to get the saved data later
   * @param value the data to be saved
   *
   * @returns true if data is successfully saved or false
   */
     async set(key: string, value: any): Promise<any> {
      try {
        const result = await this.storage.set(key, value);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  
    /**
     * Returns a string saved in storage by key
     *
     * @param key the key to get the string
     *
     * @returns a promise if key is found or null
     */
    async get(key: string): Promise<any|null> {
      try {
        const result = await this.storage.get(key);
        if (result != null) {
          return result;
        }
        return null;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
}
