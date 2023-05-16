export const readSession = () => {
    return localStorage.getItem('session');
}

export const createSession = (session: string) => {
    localStorage.setItem('session', session);
}

export const deleteSession = () => {
    localStorage.removeItem('session');
}
