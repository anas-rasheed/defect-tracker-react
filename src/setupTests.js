//use jest and enzyme for unit testing
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
configure({ adapter: new Adapter() });
