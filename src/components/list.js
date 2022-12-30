import http from '../config/axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { setApiData } from '../redux/actions/carAction';

export default function List() {

    const dispatch = useDispatch();

    const apiData = useSelector((store) => store.car.posts);

    useEffect(() => {
        if (apiData.length === 0) {
            http.get()
                .then((response) => {
                    console.log(response.data)
                    dispatch(setApiData(response.data));
                })
        }

    }, []);

 


    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>CARID</Table.HeaderCell>
                        <Table.HeaderCell>INSTOCK</Table.HeaderCell>
                        <Table.HeaderCell>HP</Table.HeaderCell>
                        <Table.HeaderCell>PRICE</Table.HeaderCell>
                        <Table.HeaderCell>COLOR</Table.HeaderCell>
                        <Table.HeaderCell>*</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row key={data.id}>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.carId}</Table.Cell>
                                <Table.Cell>{data.isStock ? 'True' : 'False'}</Table.Cell>
                                <Table.Cell>{data.hp}</Table.Cell>
                                <Table.Cell>{data.price}</Table.Cell>
                                <Table.Cell style={{backgroundColor: data.color}}>{data.color}</Table.Cell>

                                <Table.Cell>
                                    <Link to={`edit/${data.id}`}>
                                        <Button>Edit</Button>
                                    </Link>
                                </Table.Cell>

                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>


    )
}
