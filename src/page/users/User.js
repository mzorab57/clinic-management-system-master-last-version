import React, { useContext, useState } from 'react'
import GlobalContext from '../../contexts/createContext/context';
import AddUserModal from '../../components/modal/AddUserModal';
import UserModal from '../../components/modal/UserModal';
import ButtonCreate from '../../components/ui/button/ButtonCreate';
import Table from '../../components/ui/table/Table';
import Loader from '../../components/ui/loader/Loader';

export const User = () => {

    // context for share data
    const { userList, searchUser, loader } = useContext(GlobalContext);
    //change input
    const [admin_id, setAdmin_id] = useState(0);
    const [admin_name, setAdminName] = useState("");
    const [admin_password, setAdminPassword] = useState("");
    const [admin_role, setAdminRole] = useState("admin");
    //pshan dani modallakan
    const [show, setShow] = useState(false);
    const [addshow, setAddShow] = useState(false);
    // datay (thead , tbody)
    const thead = ["Id", "username", "password", "role"]
    const tbody = ["admin_name", "admin_password", "admin_role"]
    //am change bo aw input naia ka update akren yan delete akren, bo away la naw setState ka tanha awana da bne ka to atawe
    const change = ["admin_name", "admin_password", "admin_role", "admin_id"]
    const setState = [setAdminName, setAdminPassword, setAdminRole, setAdmin_id]


    return (
        <div className=" select-none">
            <UserModal isVisible={show} onClose={setShow} admin_id={admin_id} admin_name={admin_name} setAdminName={setAdminName} admin_password={admin_password} setAdminPassword={setAdminPassword} admin_role={admin_role} setAdminRole={setAdminRole} />
            <AddUserModal isAddVisible={addshow} onClose={setAddShow} admin_name={admin_name} setAdminName={setAdminName} admin_password={admin_password} setAdminPassword={setAdminPassword} admin_role={admin_role} setAdminRole={setAdminRole} />
            {loader ? <Loader /> :
                <div className=' bg-white overflow-auto mx-3  mt-10 rounded-md  p-5 '>
                    <ButtonCreate setAddShow={setAddShow} buttonName="Create User" />
                    <Table thead={thead} data={userList} search={searchUser} tbody={tbody} setState={setState} setShow={setShow} change={change} />
                </div>
            }
        </div>
    )
}

export default User
