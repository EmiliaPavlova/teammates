import { shallow } from 'enzyme';
import Input from './Input';

describe('Input component', () => {
  it('renders the component with all props', () => {
    const wrapper = shallow(<Input
      id='Name'
      label='Name'
      value='John Doe'
      placeholder='enter name'
      onChange={jest.fn()}
      error='error'
    />);
    expect(wrapper).toMatchSnapshot();
  })

  it('renders the component without an error', () => {
    const wrapper = shallow(<Input
      id='Name'
      label='Name'
      value='John Doe'
      placeholder='enter name'
      onChange={jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot();
  })
})