import React from "react";
import "./style.css";

function EmployeeRow(props) {
    const empImage = (id) => {
        switch (id) {
            case 1: return require("./Images/elijah-hiett.jpg");
            case 2: return require("./Images/alex-bortolato.jpg");
            case 3: return require("./Images/alexis-chloe.jpg");
            case 4: return require("./Images/antonio-scant.jpg");
            case 5: return require("./Images/caleb-lucas.jpg");
            case 6: return require("./Images/cristian-newman.jpg");
            case 7: return require("./Images/diya-dunne.jpg");
            case 8: return require("./Images/emerson-mathew.jpg");
            case 9: return require("./Images/james-timothy.jpg");
            case 10: return require("./Images/jesse-ramirez.jpg");
            case 11: return require("./Images/john-doe.jpg");
            case 12: return require("./Images/jon-grogan.jpg");
            case 13: return require("./Images/julian-ferrell.jpg");
            case 14: return require("./Images/lylah-montoya.jpg");
            case 15: return require("./Images/mila-rose.jpg");
            case 16: return require("./Images/milo-farley.jpg");
            case 17: return require("./Images/monica-dahiya.jpg");
            case 18: return require("./Images/prijun-koirala.jpg");
            case 19: return require("./Images/reid-valenzuela.jpg");
            case 20: return require("./Images/simon-marsault.jpg");
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
    );

};

export default EmployeeRow;