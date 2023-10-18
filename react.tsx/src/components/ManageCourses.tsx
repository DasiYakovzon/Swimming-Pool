import { useEffect, useState } from 'react'
import { getManageCourses } from '../api/api'
import { Box } from '@mui/material'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CourseCardAdmin from './CourseCardAdmin'

export default function ManageCourses() {

    const [courses, setCourses] = useState<[]>([])
    const navigate = useNavigate();
    useEffect(() => {

        const fetchCourses = async () => {
            const res = await getManageCourses();
            setCourses(res);

        }
        fetchCourses()
    }, [])

    const handleSubmit = () => {
        navigate('/AddCourse')
    }

    return (
        <>
            <Box>
                <br />
                <Button
                    color="primary"
                    type="submit"
                    variant="contained"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                    onClick={handleSubmit}
                >
                    Add Courses
                </Button>

                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginTop: '5%',
                        gap: '20px',
                    }}
                >
                    {courses.map((cardData: any, index: number) => (
                        <CourseCardAdmin key={index} prop={cardData} />
                    ))}
                </div>
            </Box>
        </>
    )
}
