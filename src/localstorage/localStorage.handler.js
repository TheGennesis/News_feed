//write the item with this key-value pair in localstorage
const write = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

//read the item with this specific key. if there isn't, return undefined
const read = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
};

//the function cleans every 2 hours the localstorage, except of the country selected by the user
const autoEmpty = () => {
    const country = localStorage.getItem('country');

    const lastTime = new Date(localStorage.getItem('lastTime'));
    if (!lastTime) { localStorage.setItem('lastTime', new Date()) }
    
    const now = new Date();

    const elapsedTime = now.getTime() - lastTime.getTime();
    const elapsedHours = elapsedTime / (1000 * 60 * 60);

    if (elapsedHours > 2)
    {
        localStorage.clear();
        localStorage.setItem('country', country);
        localStorage.setItem('lastTime', now);   
    }
};

//export the functions
export {
    write,
    read,
    autoEmpty
};