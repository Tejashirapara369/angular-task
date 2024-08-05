import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetectingTextService {

  constructor(
    private readonly HttpClient:HttpClient
  ) { }

 public detectText(payLoad:any){
  const chunks = {chunks:payLoad}
   return this.HttpClient.post('http://68.183.88.247:7575/gptDetectorManagement/detectChunksByGpt',chunks)
 }
}
