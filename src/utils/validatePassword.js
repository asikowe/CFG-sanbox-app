export function passwordValidator(password) {
    if (!password) return 'Password cannot be empty.'
    if (password.length < 3) return 'Password must be at least 3 characters long.'
    return ''
}