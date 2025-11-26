export function setAuthToken(token) {
    localStorage.setItem('token', token);
    window.dispatchEvent(new CustomEvent('auth-token-changed', { detail: token }));
}

export function removeAuthToken() {
    localStorage.removeItem('token');
    window.dispatchEvent(new CustomEvent('auth-token-changed', { detail: null }));
}
