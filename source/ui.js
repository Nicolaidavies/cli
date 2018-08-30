'use strict';
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Website',
		url: 'https://nicolai.io'
	},
	{
		label: 'Resume',
		url: 'https://nicolai.io/resume'
	},
	{
		label: 'Projects',
		url: 'https://nicolai.io/projects'
	},
	// {
	// 	label: 'Twitter',
	// 	url: 'https://twitter.com/nicolaidavies'
	// },
	{
		label: 'GitHub',
		url: 'https://github.com/nicolaidavies'
	},
	{
		label: 'Contact',
		url: 'https://nicolai.io/contact'
	},
	{
		label: 'Quit',
		action() {
			process.exit();
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>I'm a software developer specialising in mobile and web applications. </Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
