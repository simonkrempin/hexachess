export const getSession = (): string | null => {
    return localStorage.getItem('session');
}

export const createSession = (session: string): void => {
    localStorage.setItem('session', session);
}

export const deleteSession = (): void => {
    localStorage.removeItem('session');
}
