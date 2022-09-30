
export default function Form({ data, state }) {
    const [visible, setVisible] = state;
    const { mobile, name, salary, status, _id } = visible;
    // ============ update function
    const handleSubmit = async event => {
        event.preventDefault();
        const neweployee = {
            name: event.target.name.value,
            mobile: event.target.mobile.value,
            salary: event.target.salary.value,
            status: event.target.radio.value
        }
        console.log(neweployee)
        const response = await fetch(`https://vocal-cat-872b6e.netlify.app/api/users?id=${_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(neweployee),
        });
        const inputs = document.querySelectorAll('#name,#mobile,#salary');
        inputs.forEach(input => {
            input.value = '';
        });
    }


    return (
        <div className="w-full items-center justify-center mx-1">

            <div className='text-center lg:w-1/2 w-full  mx-auto text-sm'>

                <div className=' mx-auto bg-[#d0a87ef5] py-5 rounded-lg mb-8'>
                    <div className="flex justify-between w-1/2 mx-auto">
                        <h1 className="text-2xl mb-3 font-bold text-[#33333]">Update</h1>
                        <button className="bg-black p-2 rounded-full font-bold text-2xl" onClick={() => setVisible('')}>X</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="w-10/12 mx-auto">
                            {/* form row 1 */}
                            <div className="flex justify-between items-center mb-4 flex-col lg:flex-row">

                                <div className="flex gap-3 items-center mb-2 lg:mb-0">
                                    <label htmlFor="name">Name</label>
                                    <input required disabled value={name} type="text" name="name" id="name" placeholder='Name' className='py-3 px-2 rounded-md text-sm ' />
                                </div>
                                <div className="flex gap-3 items-center">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="text" required name="mobile" id="mobile" placeholder='Mobile' className='py-3 px-2 rounded-md text-sm' />
                                </div>

                            </div>

                            {/* form row 2 */}
                            <div className="flex justify-between items-center mb-4 flex-col lg:flex-row">
                                <div className="flex gap-3 items-center mb-2 lg:mb-0">
                                    <label htmlFor="salary">Salary</label>
                                    <input type="number" required name="salary" id="salary" placeholder='Name' className='py-3 px-2 rounded-md text-sm ' />
                                </div>
                            </div>

                            {/* form row 3 */}
                            <div className="flex justify-center gap-5 mb-2">
                                <div className="flex justify-center items-center gap-3">
                                    <label htmlFor="active">Active</label>
                                    <input type="radio" id="active" name="radio" className="radio" value="active" defaultChecked />
                                </div>

                                <div className="flex justify-center items-center gap-3">
                                    <label htmlFor="inactive">inactive</label>
                                    <input type="radio" id="inactive" name="radio" value="inactive" className="radio" />
                                </div>
                            </div>

                            <input type="submit" value="Update user" className='py-3 w-1/2 bg-orange-600 text-white  cursor-pointer rounded-lg' />
                        </div>

                    </form>
                </div>



            </div>
        </div>
    )
} 