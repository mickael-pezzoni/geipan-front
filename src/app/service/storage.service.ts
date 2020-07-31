import { Injectable } from '@angular/core';
import { Cas } from '../interface/cas';
import { Temoignage } from '../interface/temoignage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  setCurrentCas(cas: Cas): void{
    window.sessionStorage.setItem("currentCas", JSON.stringify(cas));
  }

  setCurrentTemoignages(tem: Temoignage): void {
    window.sessionStorage.setItem("currentTemoignange", JSON.stringify(tem));
  }

  getCurrentCas(): Cas {
    return JSON.parse(window.sessionStorage.getItem("currentCas"));
  }

  getCurrentTemoignage(): Temoignage {
    return JSON.parse(window.sessionStorage.getItem("currentTemoignange"));
  }

  cleanCurrentCas(): void {
    window.sessionStorage.removeItem("currentCas");
  }

  cleanCurrentTemoignage(): void {
    window.sessionStorage.removeItem("currentTemoignange");
  }
}
