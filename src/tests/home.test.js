import { render } from '@testing-library/react';
import Home from '../components/Home';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as redux from 'react-redux'

const student = {
    id: 1,
    firstname: 'test',
    lastname: 'test'
};
const mockStore = configureMockStore([thunk]);
const store = mockStore();
Object.defineProperty(window, 'matchMedia', {
    value: () => {
        return {
            matches: false,
            addListener: () => {},
            removeListener: () => {}
        };
    }
});
Object.defineProperty(window, 'getComputedStyle', {
    value: () => {
        return {
            getPropertyValue: () => {}
        };
    }
});
const renderWithProvider = (component) => render(
    <Provider store={store}>
        {component}
    </Provider>
)

describe('Home Component Tests', () => {
    let spy;
    beforeAll(() => {
        spy = jest.spyOn(redux, 'useSelector');
    })
    it('rendered an empty component', () => {
        spy.mockReturnValueOnce([]).mockReturnValueOnce([])
        const { getByTestId } = renderWithProvider(<Home/>);
        const empty = getByTestId('empty-list');
        expect(empty).toBeTruthy();
    })
   it('rendered a list', () => {
       spy.mockReturnValueOnce([student]).mockReturnValueOnce([])
       const { getByTestId } = renderWithProvider(<Home/>);
       const list = getByTestId('list');
       expect(list).toBeTruthy();
    })
    it('returns the initials of a student name', () => {
        spy.mockReturnValueOnce([student]).mockReturnValueOnce([])
        const { getByTestId } = renderWithProvider(<Home/>);
        const initials = getByTestId('avatar');
        expect(initials).toContainHTML('tt');
    })
    it('returns the average score of total works', () => {
        const works = [
            { studentId: 1,  name: 'English', score: 100},
            { studentId: 1,  name: 'Maths', score: 50},
        ]
        spy.mockReturnValueOnce([student]).mockReturnValueOnce(works)
        const { getByTestId } = renderWithProvider(<Home/>);
        const total = getByTestId('score');
        expect(total).toContainHTML('75');
    })
})