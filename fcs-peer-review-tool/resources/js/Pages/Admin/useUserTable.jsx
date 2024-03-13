import { useEffect, useRef, useState } from "react";
import _ from "lodash";
import { SYSTEM_ROLES_ARRAY } from "@/Utils/constants";

export function useUserForm(users) {
    const [tableData, setTableData] = useState(_.cloneDeep(users));
    const [searchValue, setSearchValue] = useState("");
    const [selectedRoles, setSelectedRoles] = useState(
        SYSTEM_ROLES_ARRAY.reduce((acc, role) => {
            return { ...acc, [role]: SYSTEM_ROLES_ARRAY.includes(role) };
        }, {})
    );

    useEffect(() => {
        handleFilterUsers();
    }, [searchValue, selectedRoles]);

    const handleFilterUsers = () => {
        const filteredUsersBySelectedRole = users.filter(
            (user) => selectedRoles[user.role]
        );
        const filteredUsersBySearch = filteredUsersBySelectedRole.filter(
            (user) => {
                const fullName =
                    `${user.first_name} ${user.last_name}`.toLowerCase();
                return (
                    user.first_name
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()) ||
                    fullName.includes(searchValue.toLowerCase()) ||
                    user.email
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()) ||
                    user.banner_id
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                );
            }
        );

        setTableData(filteredUsersBySearch);
    };

    const handleChangeSearchValue = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    };

    const handleChangeSelectedRole = (role) => {
        const newSelectedRoles = {
            ...selectedRoles,
            [role]: !selectedRoles[role],
        };
        setSelectedRoles(newSelectedRoles);
    };

    return {
        searchValue,
        handleChangeSearchValue,
        handleChangeSelectedRole,
        selectedRoles,
        tableData,
    };
}
