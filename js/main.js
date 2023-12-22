'use strict'

const tabsItem = document.querySelectorAll('.tabs__btn-item')
const tabsContent = document.querySelectorAll('.tabs__content-item')
tabsItem.forEach(tabItem => {
	tabItem.addEventListener('click', openTab)
});

function openTab(e) {
	const currentTab = e.currentTarget
	const button = currentTab.dataset.button
	tabsItem.forEach(tabItem => {
		tabItem.classList.remove('tabs__btn-item--active')
	})

	tabsContent.forEach(tabContent => {
		tabContent.classList.remove('tabs__content-item--active')
	})

	currentTab.classList.add('tabs__btn-item--active')
	document.querySelector(`#${button}`).classList.add('tabs__content-item--active')

}
