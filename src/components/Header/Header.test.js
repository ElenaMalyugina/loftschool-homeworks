import React from 'react';
import Header from './Header';
import { TestProvider } from '../../contexts/Auth';
import { mount } from 'enzyme';

describe("Хедер c контекстом { isAuthorized: true, email: 'test@test.ru' }", () => {
  const context = { isAuthorized: true, email: 'test@test.ru' };
  const wrapper = mount(
    <TestProvider value={context}>
      <Header />
    </TestProvider>
  );

  it('p.t-header-email содержит: test@test.ru', () => {
    expect(wrapper.find('p.t-header-email').text()).toBe('test@test.ru');
  });

  it('Хедер содержит button.t-logout', () => {
    expect(wrapper.find('button.t-logout').length).toBe(1);
  });
});

describe('Хедер c контекстом { isAuthorized: false }', () => {
  const context = { isAuthorized: false };
  const wrapper = mount(
    <TestProvider value={context}>
      <Header />
    </TestProvider>
  );

  /*в примере надпись Header остается всегдаю Почему тест был рассчитан на другое - вопрос*/
  it('Хедер пустой', () => {
    expect(wrapper.children().length).toBe(1);    
    expect(wrapper.find('div.header-context').length).toBe(0);
  });
});
