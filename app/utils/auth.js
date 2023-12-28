'use client'
export const getAuthToken= () => {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem('user-token')
    }
}

export const setAuthToken= (token) => {
    if (typeof window !== 'undefined') {
        return window.localStorage.setItem('user-token', JSON.stringify(token))
    }
}

export const removeAuthToken = () => {
    if (typeof window !== 'undefined') {
    window.localStorage.removeItem('user-token');
    }
};

export const isAuthenticated = () => {
    const token = getAuthToken() ;
    return !!token;
}
