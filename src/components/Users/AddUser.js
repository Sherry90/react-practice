import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css"


const AddUser = props => {
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(event.target[0].value)
        console.log(event.target[1].value)
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor={"Username"}>UserName</label>
                <input id={"Username"} type={"text"}></input>
                <label htmlFor={"age"}>Age (Years)</label>
                <input id={"age"} type={"number"}></input>
                <Button type={"submit"}>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;