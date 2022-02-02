import React from 'react';
import { Avatar, List } from 'antd';
import { FolderOutlined, ProfileOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const StudentList = ({ students }) => {
    const works = useSelector((state) => state.works.value);
    /**
     * returns the amount of works submitted by a student
     * @param studentId
     */
    const nbWorks = (studentId) => {
        return works.filter((work) => work.studentId === studentId).length;
    }
    /**
     * returns the average score of total student's works
     * @param studentId
     */
    const totalScore = (studentId) => {
        const studentWorks = works.filter((work) => work.studentId === studentId);
        return studentWorks.length > 0 ? studentWorks.reduce((a, b) => a + b.score, 0) / studentWorks.length : 0;
    }
    /**
     * return the name's initials of a student in order to display it in avatar
     * @param student
     */
    const getInitials = (student) => {
        const { firstname, lastname } = student;
        return firstname.substring(0, 1) + lastname.substring(0, 1)
    }

    return (
        <List data-testid="list">
            {
                students.map((student, index) => (
                    <List.Item key={index}>
                        <List.Item.Meta
                            avatar={<Avatar className="avatar" data-testid="avatar">{getInitials(student)}</Avatar>}
                            title={`${student.firstname} ${student.lastname}`}
                            description={
                                <>
                                    {
                                        nbWorks(student.id) > 0 ? (
                                            <>
                                                <div><FolderOutlined /> {nbWorks(student.id)} works</div>
                                                <div data-testid="score"><ProfileOutlined /> {totalScore(student.id)}/100</div>
                                            </>
                                        ) : <div>No works available</div>
                                    }
                                </>
                            }
                        >
                        </List.Item.Meta>
                    </List.Item>
                ))
            }
        </List>
    )
}

export default StudentList;