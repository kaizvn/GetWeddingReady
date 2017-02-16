import {
	Component,
	OnInit
} from '@angular/core';
import {
	ActivatedRoute
} from '@angular/router';

import {
	Questions
} from './questions';

import { AppState } from '../app.service';

@Component({
	selector: 'Surveys',
	providers: [
		Questions
	],
	templateUrl: './survey.component.html',
	styleUrls: ['./survey.component.css'],
})
export class SurveyComponent implements OnInit {

	public localState: any;
	public questions: any[];
	public currentQuestionIndex: number = 0;
	constructor(
		public route: ActivatedRoute,
		public questionService: Questions,
		public appState: AppState,
	) { }

	public ngOnInit() {
		this.route
			.data
			.subscribe((data: any) => {
				console.log("data", data);
				this.localState = data.yourData;
			});

		console.log('hello `survey` component');
		// static data that is bundled
		// var mockData = require('assets/mock-data/mock-data.json');
		// console.log('mockData', mockData);
		// if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
		this.asyncDataWithWebpack();
		console.log("aa",this.appState.get('questions'));
		if(this.appState.get('questions') && this.appState.get('questions').length)
			return;

		let data = this.getQuestions();
		this.appState.set("questions", data);
	}

	private getQuestions() {
		// this.title.getData().subscribe(data => this.data = data);
		return this.questionService.getQuestions().questions;
	}

	private asyncDataWithWebpack() {
		// you can also async load mock data with 'es6-promise-loader'
		// you would do this if you don't want the mock-data bundled
		// remember that 'es6-promise-loader' is a promise
		setTimeout(() => {

			System.import('../../assets/mock-data/mock-data.json')
				.then((json) => {
					console.log('async mockData', json);
					this.localState = json;
				});

		});
	}
}

