import HeaderStudents from "../components/HeaderStudents";
import StudentsLoop from "../components/StudentsLoop";
import { useState, useEffect } from "react";

function MeetStudents ( ) {
    const [students, setStudents] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredStudents, setFilteredStudents] = useState([]);

return (
    <>
    <HeaderStudents setSelectedCategory={setSelectedCategory} setFilteredStudents={setFilteredStudents} students={students}/>
    <StudentsLoop />
    </>
)
}

export default MeetStudents;