import Form from "../components/form";
import data from "../components/data.json";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
// import TableData from "../components/tableData"

export default function Employee() {

    return (
        <div className="bg-[#e6e6e6] min-h-screen">
            <h1 className="text-4xl font-semibold text-[#333333] pt-4 mb-10">Employee list</h1>

            {/* ==========add user========== */}
            <Form></Form>

            {/* ===========users table=========== */}
            <table className="min-w-full table-auto">
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
                    {data.map((data, i) => <TableData key={i} data={data} />)}

                </tbody>
            </table>
        </div>
    )
}

function TableData({ data }) {
    const { name, mobile, salary, status } = data;
    return (

        <tr className="hover:bg-[#d0a87ed2]">
            <td><p className="inline-block py-3 text-sm">{name}</p></td>
            <td><p className="inline-block py-3 text-sm">{mobile}</p></td>
            <td><p className="inline-block py-3 text-sm">$ {salary}</p></td>
            <td><p className="inline-block p-1 lg:px-2 rounded-full bg-green-600 text-white lg:text-sm text-xs">{status}</p></td>
            <td>
                <div className="flex gap-5 justify-center">
                    <button><BiEdit className="text-green-600 lg:text-2xl text-sm cursor-pointer"></BiEdit></button>
                    <button><BiTrashAlt className="text-red-600 lg:text-2xl text-sm cursor-pointer"></BiTrashAlt></button>
                </div>
            </td>


        </tr>
    )
}

