export const getPinCode = () => {
    const pin = localStorage.getItem("pin");

    return pin || '';
}

export const setPinCode = (pin) => {
    localStorage.setItem("pin", pin);
}