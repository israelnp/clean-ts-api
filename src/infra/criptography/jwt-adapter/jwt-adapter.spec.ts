import { JwtAdapter } from './jwt-adapter'
import jwt from 'jsonwebtoken'

describe('Jwt Adapter', () => {
  test('Should call sign with correct values', async () => {
    const sut = new JwtAdapter('secret')
    const signSpay = jest.spyOn(jwt, 'sign')
    await sut.encrypt('any_id')
    expect(signSpay).toHaveBeenLastCalledWith({ id: 'any_id' }, 'secret')
  })
})
