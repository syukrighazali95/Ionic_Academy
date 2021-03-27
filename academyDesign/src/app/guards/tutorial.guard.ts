import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TutorialGuard implements CanActivate{
  
  constructor( private storage: Storage, private router: Router){}
  
  async canActivate(): Promise<boolean> {
    const hasSeen = await this.storage.get("tutorialSeen");
    if (!hasSeen) {
      this.router.navigateByUrl('/tutorial');
    }
    return hasSeen;
  }
  
}
