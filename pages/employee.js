import Form from "../components/form";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import Loading from '../img/loading.svg';
import Image from "next/image";
import deleteUser from "../controller/deleteUser";
import { useQuery } from "react-query";
import AllEmployee from "../controller/allEmployee";
import { useState } from "react";
import UpdateUser from "../updateUser/updateUser";

export default function Employee() {
    const [visible, setVisible] = useState()


    const { isloading, isError, data, error } = useQuery('employee', AllEmployee)
    if (isloading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Image src={Loading} alt='Loading' height={100} width={100} ></Image>;
            </div>
        )
    }

    // table data
    function TableData({ data }) {
        const { name, mobile, salary, status, _id } = data;

        const modalToggle = (param) => {
            return (
                <div className="w-full min-h-screen bg-red-800 fixed flex justify-center items-center">
                    sdfsfdsfsdf
                </div>
            )
        }

        return (


            <tr className="hover:bg-[#d0a87ed2]">
                <td><p className="inline-block py-3 text-sm">{name}</p></td>
                <td><p className="inline-block py-3 text-sm">{mobile}</p></td>
                <td><p className="inline-block py-3 text-sm">$ {salary}</p></td>
                <td><p className="inline-block text-white lg:text-sm text-xs">
                    {status == "inactive" ?
                        <span className="bg-red-600 p-1 lg:px-2 rounded-full">{status}</span> :
                        <span className="bg-green-600 p-1 lg:px-2 rounded-full">{status}</span>
                    }
                </p></td>
                <td>
                    <div className="flex gap-5 justify-center">
                        <button><BiEdit className="text-green-600 lg:text-2xl text-sm cursor-pointer" onClick={() => {
                            setVisible(data)
                        }}></BiEdit></button>
                        <button><BiTrashAlt className="text-red-600 lg:text-2xl text-sm cursor-pointer" onClick={() => deleteUser(_id)}></BiTrashAlt></button>
                    </div>
                </td>


            </tr>

        )
    }



    return (
        <div>
            <h1 className="text-4xl font-semibold text-[#333333] pt-4 mb-10">Employee list</h1>
            {/* ========== modal ===== */}
            {visible ? <UpdateUser data={visible} state={[visible, setVisible]}> </UpdateUser> : <></>}
            {/* ==========add user========== */}
            <Form></Form>

            {/* ===========users table=========== */}
            <div className="ml-3 mr-3">
                <table className="min-w-full table-auto border border-gray-900 border-collapse">
                    <thead>
                        <tr className="bg-[#222222] text-gray-200">
                            <th className="text-sm font-normal md:text-lg"><span className="inline-block py-1"> Name</span></th>
                            <th className="text-sm font-normal md:text-lg"><span className="inline-block py-1"> Phone</span></th>
                            <th className="text-sm font-normal md:text-lg"><span className="inline-block py-1"> Salary</span></th>
                            <th className="text-sm font-normal md:text-lg"><span className="inline-block py-1"> Status</span></th>
                            <th className="text-sm font-normal md:text-lg"><span className="inline-block py-1"> Action</span></th>
                        </tr>
                    </thead>

                    <tbody>
                        {data?.map((data, i) => <TableData key={i} data={data} />)}

                    </tbody>
                </table>
            </div>
        </div >
    )
}



