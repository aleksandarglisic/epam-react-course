import Dialog from "../components/Dialog";

export default {
    title: 'Components/Dialog',
    component: Dialog,
    tags: ["autodocs"],
    argTypes: {
        onClose: { action: 'closed' },
    },
};

const Template = (args) => (
    <Dialog {...args}>
        <p>This is dialog content.</p>
        <button>Confirm</button>
    </Dialog>
);

export const Default = Template.bind({});
Default.args = {
    title: 'Delete Movie',
};
