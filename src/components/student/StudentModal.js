import React from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { addStudent } from '../../reducers/student';
import { useDispatch } from 'react-redux';

const StudentModal = ({ setIsModalVisible, isModalVisible, nbStudents }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    /**
     * get values of the form and add a student to redux store when click on submit
     * @param values
     */
    const onFinish = (values) => {
        values['id'] = nbStudents + 1;
        dispatch(addStudent(values))
        form.resetFields();
        setIsModalVisible(false);
    };
    /**
     * hide modal and reset form fields when cancel button is clicked
     */
    const handleCancel = () => {
        form.resetFields();
        setIsModalVisible(false);
    }
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    return (
        <Modal data-testid="modal" title="Add a student" visible={isModalVisible} onCancel={handleCancel} footer={null}>
            <Form {...layout} form={form} name="add-student" onFinish={onFinish}>
                <Form.Item
                    name="firstname"
                    label="Firstname"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="lastname"
                    label="Lastname"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
};

export default StudentModal;