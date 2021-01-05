const handlers = require('../handlers');

test('Should render home page', () => {
  const req = {};
  const res = { render: jest.fn() };

  handlers.home(req, res);

  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe('home');
});

test('Should render about page', () => {
  const req = {};
  const res = { render: jest.fn() };

  handlers.about(req, res);

  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe('about');
});

test('Should render topic page', () => {
  const req = {};
  const res = { render: jest.fn() };

  handlers.topic(req, res);

  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe('topic');
});

test('Should render account page', () => {
  const req = {};
  const res = { render: jest.fn() };

  handlers.account(req, res);

  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe('account');
});

test('Should render 404 page', () => {
  const req = {};
  const res = { render: jest.fn() };

  handlers.notFound(req, res);

  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe('404');
});

test('Should render 500 page', () => {
  const err = new Error();
  const req = {};
  const res = { render: jest.fn() };
  const next = jest.fn();

  handlers.serverError(err, req, res, next);

  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe('500');
});
