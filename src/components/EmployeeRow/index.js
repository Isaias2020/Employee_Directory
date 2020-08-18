import React from "react";
import "./style.css";

function EmployeeRow(props) {
    const empImage = (id) => {
        switch (id) {
            case 1: return require("./Images/elijah-hiett.jpg");
            default: return "https://via.placeholder.com/150";
        }
    }

    return (
        <tr className="EmployeeRow">
            <td>
                <img src={empImage(props.id)} alt={props.name} />
            </td>
            <td>{props.name}</td>
            <td>{props.number}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
        // <h2>EmployeeRow</h2>
    );

};

export default EmployeeRow;