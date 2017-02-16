import { EventEmitter } from '@angular/forms/src/facade/async';
import { ANY_STATE } from '@angular/compiler/src/private_import_core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'question-item',
	styleUrls: ['./question.component.css'],
	providers: [],
	templateUrl: './question.component.html',
})
export class QuestionComponent implements OnInit {

	public localState: any;
	public selectedValue;
	public question: string;
	public answers: string[];
	@Input() surveyItem: any;
	//@Output() doAnswer: EventEmitter<any> = new EventEmitter();

	constructor(
	) { }

	public ngOnInit() {
		console.log(this.surveyItem);
		this.question = this.surveyItem.q;
		this.answers = this.surveyItem.a;
	}

	public onSeleted() {
		console.log("this.surveyItem.",this.surveyItem);
		this.surveyItem.selectedValue = this.selectedValue;
		/*this.doAnswer.emit({index: this.index,value: this.selectedValue});*/
	}
}

//set state ()"question_01", {value})
