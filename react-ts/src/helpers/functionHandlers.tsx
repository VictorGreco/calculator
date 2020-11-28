export const clickHandler = (event: any, callback: Function) => {
    const action: string = event.target.attributes['data-action'].textContent;
    const textContentValue: string = event.target.textContent;

    callback(action, textContentValue);
};