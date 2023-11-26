import {useEffect, useState} from "react";
import {deleteStudent, getStudents} from "../api/fetchAPI.js";
import {toast, Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const StudentList = () => {
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };

    const navigate = useNavigate();
    const [studentList, setStudentList] = useState([{
        "firstName": "",
        "lastName": "",
        "gender": "",
        "dateOfBirth": new Date().toLocaleDateString(),
        "nationality": "",
        "address": "",
        "email": "",
        "phone": "",
        "admissionDate": new Date().toLocaleDateString(),
        "courses": []
    }]);
    useEffect(() => {
        const fetchData = async () => {
            const data = (await getStudents()).data;
            if (data.status === 'success') {
                data.data.dateOfBirth =
                setStudentList(data.data);
            }
        };
        fetchData();
    }, [studentList])

    const handleDelete = async (id) => {
        const data = (await deleteStudent(id)).data;
        if (data.status === 'success') {
            const updatedStudentList = studentList.filter((student) => student._id !== id);
            setStudentList(updatedStudentList);
            toast.success("Deleted", {
                icon: '👏',
                position: "top-center",
            });
        }
    }

    const handleUpdate = (student) => {
        navigate(`/updateStudent`, {state: student})
    }

    return (
        <div className="max-w-screen-xl xl:mx-auto relative overflow-x-auto m-5 mx-5 shadow-md sm:rounded-lg">
            <div><Toaster /></div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-100 uppercase bg-primary-500">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        First Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Last Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Gender
                    </th>
                    <th scope="col" className="px-6 py-3">
                        DOB
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Nationality
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Admission Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Courses
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    studentList.map((student, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4">
                                {student.firstName}
                            </td>
                            <td className="px-6 py-4">
                                {student.lastName}
                            </td>
                            <td className="px-6 py-4">
                                {student.gender}
                            </td>
                            <td className="px-6 py-4">
                                {new Date(student.dateOfBirth).toLocaleDateString('en-GB', options)}
                            </td>
                            <td className="px-6 py-4">
                                {student.nationality}
                            </td>
                            <td className="px-6 py-4">
                                {student.address}
                            </td>
                            <td className="px-6 py-4">
                                {student.email}
                            </td>
                            <td className="px-6 py-4">
                                {student.phone}
                            </td>
                            <td className="px-6 py-4">
                                {new Date(student.admissionDate).toLocaleDateString('en-GB', options)}
                            </td>
                            <td className="px-6 py-4">
                                {student.courses.join(', ')}
                            </td>
                            <td className="flex items-center px-6 py-4">
                                <button onClick={() => handleUpdate(student)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                <button onClick={() => handleDelete(student._id)}
                                   className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</button>
                            </td>
                        </tr>

                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;