<%*
const options = {
	red: '粗体红字',
	purple: '粗体紫字',
	violet: '粗体粉字',
    underline: '下划线',
    dashedUl: '虚下划线',
    dottedUl: '点下划线',
    doubleUl: '双下划线',
    wavyUl: '波浪下划线',
};

const templates = {
	red: '<span style="color: red;">**{}**</span>',
	purple: '<span style="color: purple;">**{}**</span>',
	violet: '<span style="color: violet;">**{}**</span>',
    underline: '<span style="text-decoration: underline;">**{}**</span>',
    dashedUl: '<span style="text-decoration: underline; text-decoration-style: dashed;">**{}**</span>',
    dottedUl: '<span style="text-decoration: underline; text-decoration-style: dotted;">**{}**</span>',
    doubleUl: '<span style="text-decoration: underline; text-decoration-style: double;">**{}**</span>',
    wavyUl: '<span style="text-decoration: underline; text-decoration-style: wavy;">**{}**</span>',
};

const type = await tp.system.suggester(Object.values(options), Object.keys(options), true, 'Select css type.');

const text = await tp.system.prompt('Text:', '', true);

let tpl = templates[`${type}`];
tR +=  tpl.replaceAll('{}', text ? text : '')
-%>