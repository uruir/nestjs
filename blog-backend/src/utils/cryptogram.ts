import * as crypto from 'crypto'

const makeSalt = (): string => {
    return crypto.randomBytes(3).toString('base64')
}

const encryptPassword = (password: string, salt: string): string => {
    if (!password || !salt) {
        return ''
    }
    const tempSalt = Buffer.from(salt, 'base64')
    return (crypto.pbkdf2Sync(password, tempSalt, 10000, 16, 'sha1').toString('base64'))
}

export default {
    makeSalt,
    encryptPassword
}