import {useEffect, useState} from "react";
import {toast, Toaster} from "react-hot-toast";
import {addStudent, getStudentByID, updateStudent} from "../api/fetchAPI.js";
import {useLocation, useNavigate} from "react-router-dom";

const StudentUpdateForm = () => {
    const navigate = useNavigate();
    const {state} = useLocation();

    const [formData, setFormData] = useState({
        "firstName": "",
        "lastName": "",
        "gender": "",
        "dateOfBirth": "",
        "nationality": "",
        "address": "",
        "email": "",
        "phone": "",
        "admissionDate": "",
        "courses": []
    })
    const [selectedCourses, setSelectedCourses] = useState([]);

    useEffect(() => {
        (async () => {
            if (state){
                const {data} = await getStudentByID(state._id);
                data.data[0] = {
                    ...data.data[0],
                    admissionDate: new Date(data.data[0].admissionDate).toISOString().split('T')[0],
                    dateOfBirth: new Date(data.data[0].dateOfBirth).toISOString().split('T')[0],
                };
                setFormData(data.data[0]);
                setSelectedCourses(data.data[0].courses);
            }
        })()
    }, []);

    const handleCheckboxChange = (e) => {
        const { value } = e.target;
        if (selectedCourses.includes(value)) {
            setSelectedCourses(selectedCourses.filter((course) => {
                return course !== value;
            }));
        } else {
            setSelectedCourses([...selectedCourses, value]);
        }
    };

    useEffect(() => {
        setFormData({...formData, ["courses"]: [...selectedCourses]});
    }, [selectedCourses]);

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleForm = (e) => {
        e.preventDefault();

        let isValid = true;
        for (const key in formData) {
            if (formData[key].length === 0) {
                isValid = false;
                break;
            }
        }
        console.log(formData)
        if (isValid) {
            toast("Student updated successfully", {
                icon: '👏',
                position: 'top-center',
            })
            updateStudent(formData._id, formData).then(r => {
                console.log(r);
                if (r.status === 'success') {
                    navigate('/');
                }
            }).catch(e => {
                toast(e.toString, {
                    icon: '⚠️',
                    position: 'top-center',
                })
            })

        } else {
            toast("Please fill all the fields", {
                icon: '⚠️',
                position: 'top-center',
            })
        }
    }
    return (
        <section className="max-w-screen-xl mx-auto">
            <div><Toaster/></div>
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update existing student</h2>
                <form action="#" onSubmit={(e) => handleForm(e)}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="w-full">
                            <label htmlFor="firstName"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                First Name
                            </label>
                            <input type="text" name="firstName" id="firstName"
                                   onChange={(e) => handleFormData(e)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="John" required=""
                                   value={formData.firstName}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="lastName"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Last Name
                            </label>
                            <input type="text" name="lastName" id="lastName"
                                   onChange={(e) => handleFormData(e)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="Doe" required=""
                                   value={formData.lastName}
                            />
                        </div>
                        <div>
                            <label htmlFor="gender"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                            <select id="gender" name="gender"
                                    value={formData.gender}
                                    onChange={(e) => handleFormData(e)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option>Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label htmlFor="dob"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Date of Birth
                            </label>
                            <input type={"date"} name={"dateOfBirth"} id={"dob"}
                                   onChange={(e) => handleFormData(e)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   value={formData.dateOfBirth}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="nationality"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Nationality
                            </label>
                            <input type="text" name="nationality" id="nationality"
                                   onChange={(e) => handleFormData(e)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="eg. Bangladeshi" required=""
                                   value={formData.nationality}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="address"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Address
                            </label>
                            <input type="text" name="address" id="address"
                                   onChange={(e) => handleFormData(e)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="Dhaka 1200" required=""
                                   value={formData.address}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email
                            </label>
                            <input type="email" name="email" id="email"
                                   onChange={(e) => handleFormData(e)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="example@email.com" required=""
                                   value={formData.email}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="phone"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Phone
                            </label>
                            <input type="text" name="phone" id="phone"
                                   onChange={(e) => handleFormData(e)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="(+880) 123456789" required=""
                                   value={formData.phone}
                            />
                        </div>

                        <div className="w-full">
                            <label htmlFor="admissionDate"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Admission Date
                            </label>
                            <input type={"date"} name={"admissionDate"} id={"admissionDate"}
                                   onChange={(e) => handleFormData(e)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   value={formData.admissionDate}
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="courses"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Courses
                            </label>
                            <div className="flex flex-col gap-2 mb-4">
                                <div>
                                    <input id="course1" type="checkbox"
                                           name="courses"
                                           value="Course 1"
                                           checked={selectedCourses.includes('Course 1')}
                                           onChange={(e) => {handleCheckboxChange(e)}}
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="course1"
                                           className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Course 1
                                    </label>
                                </div>
                                <div>
                                    <input id="course2" type="checkbox"
                                           name="courses"
                                           value="Course 2"
                                           checked={selectedCourses.includes('Course 2')}
                                           onChange={(e) => {handleCheckboxChange(e)}}
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="course2"
                                           className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Course 2
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit"
                            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Update Student
                    </button>
                </form>
            </div>
        </section>
    );
};

export default StudentUpdateForm;