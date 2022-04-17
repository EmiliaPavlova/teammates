import { shallow } from 'enzyme';
import Form from './Form';
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe('Form component', () => {
  afterEach(cleanup);

  it('renders the component with all props', () => {
    const wrapper = shallow(<Form
      submit={jest.fn()}
      closeForm={jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot();
  })

})