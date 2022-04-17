import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Teammates from './Teammates';

describe('Teammates component', () => {
  afterEach(cleanup);

  it('opens modal on button click', async () => {
    const initialState = [{
      name: 'John Doe',
      birthday: new Date('20.12.1980'),
      joined: new Date('17.04.2022')
    }];
    const mockStore = configureStore();
    const store = mockStore(initialState);
    render(<Provider store={store}><Teammates /></Provider>);
    await userEvent.click(screen.getByText('+ Add teammate'));
    expect(screen.getAllByRole('textbox')[0]).toBeInTheDocument();
  });

  it('displays teammates sorted by birthdates', async () => {
    const initialState = {
      teammates: [{
        name: 'John Doe',
        birthday: new Date(1990, 12, 17),
        joined: new Date(2022, 4, 17)
      }, {
        name: 'Ann Doe',
        birthday: new Date(1996, 2, 5),
        joined: new Date(2022, 4, 17)
      }, {
        name: 'Sami Ralf',
        birthday: new Date(1992, 12, 1),
        joined: new Date(2022, 4, 17)
      }, {
        name: 'Pesho Ivanov',
        birthday: new Date(1998, 12, 20),
        joined: new Date(2022, 4, 17)
      }]
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    render(<Provider store={store}><Teammates /></Provider>);
    expect(screen).toMatchSnapshot();
    // expect(wrapper.find('.teammate-name').first()).toContain('Ann Doe');
    // expect(screen.getAllByRole('div')[0]).toHaveValue('Ann Doe');
  })
})