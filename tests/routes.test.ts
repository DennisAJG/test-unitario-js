import { AppRoutes } from '../src/routes';

describe('App Routes', () => {
  it('should have the correct routes configured', () => {
    expect(AppRoutes).toHaveLength(3); // Verifique se há 3 rotas configuradas

    expect(AppRoutes[0]).toEqual({
      path: '/posts',
      method: 'get',
      action: expect.any(Function) // Verifique se a ação é uma função
    });

    expect(AppRoutes[1]).toEqual({
      path: '/posts/:id',
      method: 'get',
      action: expect.any(Function)
    });

    expect(AppRoutes[2]).toEqual({
      path: '/posts',
      method: 'post',
      action: expect.any(Function)
    });
  });
});