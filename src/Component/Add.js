import React from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

function Add() {
    return (
        <Form>
            <FormGroup>
                <Label>NAme</Label>
                <Input type='text' placeholder='your name'></Input>
            </FormGroup>
            <Button type='submit'>Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">cancel</Link >
        </Form>
    )
}

export default Add;