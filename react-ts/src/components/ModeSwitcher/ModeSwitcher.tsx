import React from 'react';
import './ModeSwitcher.css';
import  { clickHandler } from '../../helpers/functionHandlers';

const darkModeToggler = (action: string, value: string) => {
	const DARK_MODE_CLASS: string = 'dark';
	const BODY_CLASSLIST: any = document?.querySelector('body')?.classList;

	BODY_CLASSLIST.contains(DARK_MODE_CLASS) ? BODY_CLASSLIST.remove(DARK_MODE_CLASS) : BODY_CLASSLIST.add(DARK_MODE_CLASS);
};

function ModeSwitcher(): JSX.Element {
	return (
		<label className="switch">
			<input type="checkbox" data-action="dark-mode-toggle" onClick={(event: any) => { clickHandler(event, darkModeToggler) }} />
			<span className="slider round"></span>
		</label>
	)
}

export default ModeSwitcher;

