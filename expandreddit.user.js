// ==UserScript==
// @name        Old Reddit Expand
// @version     2
// @author      Jones
// @match       *://old.reddit.com/r/*
// ==/UserScript==

const elements = document.querySelectorAll('.expando-button.collapsed');

elements.forEach(element => element.click());
