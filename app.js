var fs = require('fs' ),
	_ = require( 'lodash' );

var file = fs.readFileSync( './results.tsv', 'utf-8' );
var records = file.split( '\n' );

var headers = records.shift();

var record = {
	time: new Date(),
	name: 'Beata Delura',
	email: 'bdelura@gmail.com',
	programming: 'Backgrounds',
	languages: {
		HTML: 'Basic',
		CSS: 'Basic',
		JS: 'Basic',
		PHP: 'Basic',
		RoR: 'Basic',
		Django: 'Basic'
	},
	experience: 'some texts',
	interests: ['one', 'two', 'three'],
	whyWantToLearn: 'some other text',
	wantTakeaPart: 'yep',
	courseExceptations: ['s'],
	atTheEndOfCourseIwill: ['dd', 'dd'],
	willingToWorkMore: 'yes',
	days: ['monday', 'saturday'],
	questionsOrComments: 'fkdjfdkj'
};

records = _.map(records, function(record) {
	var result = {};
	var fields = record.split('\t');

	result.time = new Date(fields[0]);
	result.name = fields[1];
	result.email = fields[2];
	result.programming = fields[3];

	result.languages = {};
	result.languages.HTML = fields[4];
	result.languages.CSS = fields[5];
	result.languages.JS = fields[6];
	result.languages.PHP = fields[7];
	result.languages.RoR = fields[8];
	result.languages.Django = fields[9];

	result.experience = fields[10];
	result.interests = partAndTrim(fields[11]);

	result.whyWantToLearn = fields[12];
	result.wantTakeaPart = fields[13];
	result.courseExceptations = partAndTrim(fields[14]);
	result.atTheEndOfCourseIwill = partAndTrim(fields[15]);
	result.willingToWorkMore = fields[16];
	result.days = partAndTrim(fields[17]);
	result.questionsOrComments = fields[18];

	return result;
});

debugger;
fs.writeFileSync('./results.json', JSON.stringify(records, '  '), 'utf-8');

function partAndTrim(field) {
	return _.map(field.split(','), function(interest) {
		return interest.trim();
	});
}