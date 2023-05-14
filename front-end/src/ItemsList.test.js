import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import ItemsList from './components/layout/ItemsList';

test('renders Login component without crashing', () => {
    render(<ItemsList />);
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

//     // Render the component
//     const { getByTestId } = render(<ItemsList axios={mockAxios} />);

//     // Check that the table is rendered
//     expect(screen.getByTestId('items-list')).toBeInTheDocument();

//     // Check that the table contains the expected items
//     expect(screen.getAllByRole('row')).toHaveLength(2);
//     expect(screen.getByText('Item 1')).toBeInTheDocument();
//     expect(screen.getByText('Item 2')).toBeInTheDocument();
// });

// // test('should handle an error from the axios request', () => {
// //     // Mock the axios request
// //     const mockAxios = jest.fn();
// //     mockAxios.get.mockRejectedValue({
// //         status: 400,
// //         message: 'Bad request',
// //     });

// //     // Render the component
// //     const { getByText } = render(<ItemsList axios={mockAxios} />);

// //     // Check that the error message is displayed
// //     expect(screen.getByText('Error: Bad request')).toBeInTheDocument();
// // });