import React, { useContext } from 'react'
import GlobalContext from '../../contexts/createContext/context';
import ButtonUpdate from '../ui/button/ButtonUpdate';
import ButtonDelete from '../ui/button/ButtonDelete';
import Modal from '../ui/modal/Modal';

const UserModal = ({ isVisible, onClose, admin_id, admin_name, setAdminName, admin_password, setAdminPassword, admin_role, setAdminRole }) => {

    const { updateUser, deleteUser } = useContext(GlobalContext)

    // update user.
    const updateUserHandler = (e) => {
        e.preventDefault();
        updateUser({ admin_id, admin_name, admin_password, admin_role });
    }
    // delete user.
    const deletee = (e) => {
        e.preventDefault();
        deleteUser(admin_id);
    }


    if (!isVisible) return null;
    return (
        <Modal>
            <div className='   flex flex-col '>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose(false)}> X </button>
                <form onSubmit={(e) => { updateUserHandler(e); onClose(false); }} className=' bg-white rounded-md 2xl:w-[700px] w-[500px]   flex flex-col  p-5'>

                    <div className='flex flex-col'>
                        <div className=' '>
                            <label className='text-gray-500 '>Name</label>
                            <input
                                type='text'
                                autoComplete="off"
                                placeholder='name'
                                required
                                value={admin_name}
                                className=" block  w-full focus:ring-1 focus:outline-none rounded border mb-3  mt-2 p-2 "
                                onChange={(val) => setAdminName(val.target.value)} />

                        </div>
                        <div className='w-full'>
                            <label className='text-gray-500 '>Password</label>
                            <input
                                type='password'
                                autoComplete="off"
                                placeholder='password'
                                required
                                value={admin_password}
                                className="block  w-full focus:ring-1 focus:outline-none rounded border  mt-2 mb-3  p-2 "
                                onChange={(val) => setAdminPassword(val.target.value)} />
                        </div>

                    </div>
                    <div className='w-full '>
                        <div className='w-full '>
                            <label className='text-gray-500'>Role</label>
                            <select
                                required
                                onChange={(e) => setAdminRole(e.target.value)}
                                value={admin_role}
                                className=' w-full focus:ring-1 focus:outline-none rounded border  mt-1   p-2  '>
                                <option value="reception">reception</option>
                                <option value="admin">admin</option>
                            </select>
                        </div>

                        <div className='flex gap-3 w-full justify-between'>
                            <ButtonUpdate update={updateUserHandler} onClose={onClose} />
                            <ButtonDelete deleteRow={deletee} onClose={onClose} />
                        </div>

                    </div>
                </form>

            </div>

        </Modal>
    )
}

export default UserModal