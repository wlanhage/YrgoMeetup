import HeaderStudents from "../components/HeaderStudents";
import StudentsLoop from "../components/StudentsLoop";
import { useState, useEffect } from "react";
import axios from 'axios';

function MeetStudents ( ) {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get("https://yrgomeetup.onrender.com/students")
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

return (
    <>
        <HeaderStudents setSelectedCategory={setSelectedCategory} setFilteredStudents={setFilteredStudents} students={students}/>
        <StudentsLoop selectedCategory={selectedCategory} filteredStudents={filteredStudents} />
    </>
)
}

export default MeetStudents;