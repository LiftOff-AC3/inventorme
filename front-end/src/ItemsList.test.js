import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ItemsListComponent from './components/layout/ItemsListComponent';
import axios from 'axios';

test('renders Login component without crashing', () => {
    render(<ItemsListComponent />);
});

// test('should render a table of items', () => {
//     // Mock the axios request
//     const mockAxios = jest.fn();
//     mockAxios.get.mockResolvedValue({
//         data: [
//             {
//                 id: 1,
//                 itemName: 'Item 1',
//                 itemQuantity: 10,
//                 description: 'This is item 1',
//             },
//             {
//                 id: 2,
//                 itemName: 'Item 2',
//                 itemQuantity: 20,
//                 description: 'This is item 2',
//             },
//         ],
//     });
// });