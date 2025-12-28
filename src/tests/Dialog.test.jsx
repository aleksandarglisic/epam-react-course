import { render, screen, fireEvent } from '@testing-library/react';
import Dialog from "../components/Dialog";

vi.mock('focus-trap-react', () => ({
    FocusTrap: ({ children }) => <>{children}</>,
}));

describe('Dialog component', () => {
    const onClose = vi.fn();

    beforeEach(() => {
        onClose.mockClear();
    });

    test('renders title and content', () => {
        render(
            <Dialog title="Test Dialog" onClose={onClose}>
                <p>Dialog content</p>
                <button>Confirm</button>
            </Dialog>
        );

        expect(screen.getByText('Test Dialog')).toBeInTheDocument();
        expect(screen.getByText('Dialog content')).toBeInTheDocument();
    });

    test('calls onClose when close button is clicked', () => {
        render(
            <Dialog title="Test Dialog" onClose={onClose}>
                <button>Confirm</button>
            </Dialog>
        );

        fireEvent.click(screen.getByRole('button', { name: '✕' }));
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    test('renders dialog into document.body (portal)', () => {
        render(
            <Dialog title="Portal Test" onClose={onClose}>
                <button>Confirm</button>
            </Dialog>
        );

        expect(document.body).toHaveTextContent('Portal Test');
    });
});
