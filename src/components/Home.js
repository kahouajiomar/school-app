import React, { useState } from 'react';
import { Button, Empty, Divider } from 'antd';
import { useSelector } from 'react-redux';
import StudentModal from './student/StudentModal';
import StudentList from './student/StudentList';

const Home = () => {
    const students = useSelector((state) => state.students.value);
    const [isModalVisible, setIsModalVisible] = useState(false);
    /**
     * display modal when button clicked
     */
    const showModal = () => {
        setIsModalVisible(true);
    }

    return (
        <>
            <h3>Student List</h3>
            {
                students.length > 0 ? (
                    <StudentList students={students} />
                ) : (
                    <Empty data-testid="empty-list" image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )
            }
            <StudentModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} nbStudents={students.length} />
            <Divider />
            <Button data-testid="button-modal" type="primary" onClick={showModal}>
                Add a student
            </Button>
        </>
    )
}

export default Home;