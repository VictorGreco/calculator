import React from 'react';
import './App.css';
import ModeSwitcher from './components/ModeSwitcher/ModeSwitcher';
import HistoryButton from './components/HistoryButton/HistoryButton';
import CalculatorScreen from './components/CalculatorScreen/CalculatorScreen';
import CalculatorBody from './components/CalculatorBody/CalculatorBody';
import History from './components/History/History';


function App() {
	return (
		<div className="calculator">
			<div className="nav-bar">
				<ModeSwitcher></ModeSwitcher>
				<HistoryButton></HistoryButton>
			</div>
			<CalculatorScreen> 0 </CalculatorScreen>
			<CalculatorBody></CalculatorBody>
			<History></History>
		</div>
	);
}

export default App;

