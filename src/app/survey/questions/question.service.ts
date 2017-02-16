import { Z_HUFFMAN_ONLY } from 'zlib';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import {const} from 'protractor';

@Injectable()
export class Questions {

  private QUESTION_LIST = [
	  {
		  q: "I have a/an...",
		  a : ["pen", "apple", "pineapple", "pineapple pen"]
	  },
	  {
		  q: "what does the fox say?",
		  a: ["fox fox", "bow bow", "meow meow","queck queck"]
	  }
  ];

  constructor(
    public http: Http
  ) {}

  public getQuestions() {
	// return this.http.get('/assets/data.json')
    // .map(res => res.json());
    return {
      questions: this.QUESTION_LIST
    };
  }

}
