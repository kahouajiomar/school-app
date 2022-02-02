import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import { addWork } from '../reducers/work';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;

const Work = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const students = useSelector((state) => state.students.value);
    /**
     * get values of the form and add a work to redux store when click on submit
     * if success => redirect to the home page
     * @param values
     */
    const onFinish = (values) => {
        dispatch(addWork(values))
        navigate('/');
    };

    return (
        <Form {...layout} name="add-work" onFinish={onFinish}>
            <Form.Item
                name="studentId"
                label="Choose a student"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    data-testid="select"
                    placeholder="Select a student"
                >
                    {
                        students.map((student) => (
                            <Option data-testid="option" key={student.id} value={student.id}>{student.firstname} {student.lastname}</Option>
                        ))
                    }
                </Select>
            </Form.Item>
            <Form.Item
                name="name"
                label="Work name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="score"
                label="Score"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <InputNumber max={100} min={0} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add Work
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Work;