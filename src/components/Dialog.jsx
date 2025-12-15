import { createPortal } from 'react-dom'
import { FocusTrap } from 'focus-trap-react'

export default function Dialog({ title, children, onClose }) {
    return createPortal(
        <>
            <div className="dialog-overlay"/>
            <FocusTrap>
                <div className="dialog-container">
                    <div className="dialog-header">
                        <h2 className="dialog-title">{title}</h2>
                        <button className="dialog-close-btn" onClick={onClose}>✕</button>
                    </div>

                    <div className="dialog-content">
                        {children}
                    </div>
                </div>
            </FocusTrap>
        </>,
        document.body
    );
};

