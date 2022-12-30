import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import http from '../config/axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { editData } from '../redux/actions/carAction';
export default function Edit() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const apiData = useSelector((store) => store.car.posts);
    const [currentCar, setCurrentCar] = useState({
        "id": "1",
        "carId": "",
        "isStock": false,
        "hp": 0,
        "price": "",
        "color": "",
    });

    const handleInputChange = event => {
        const { name, value } = event.target
        console.log(name + "+" + value)
        setCurrentCar({ ...currentCar, [name]: value })
    }

    const handleCheckBox = () => {
        setCurrentCar({ ...currentCar, isStock: !currentCar.isStock })
    };

    useEffect(() => {
        setCurrentCar(apiData.find(x => x.id === id))
    }, []);

    const editAPIData = () => {
        http.put(id, currentCar).then(() => {
            dispatch(editData(currentCar));
            navigate('/')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>ID</label>
                    <input placeholder='ID' disabled name="id" value={currentCar.id} onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>CAR</label>
                    <input placeholder='CAR' disabled name="carId" value={currentCar.carId} onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='INSTOCK' name="checkbox" checked={currentCar.isStock} onChange={handleCheckBox} />
                </Form.Field>
                <Form.Field>
                    <label>HORSE POWER (between 100 and 550)</label>
                    <input type="range" min="100" max="550" name="hp" value={currentCar.hp} onChange={handleInputChange} />
                    <p>{currentCar.hp}</p>
                </Form.Field>
                <Form.Field>
                    <label>PRICE</label>
                    <input placeholder='PRICE' name="price" value={currentCar.price} onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>COLOR</label>
                    <input style={{ backgroundColor: currentCar.color }} placeholder='COLOR' disabled name="color" value={currentCar.color} onChange={handleInputChange} />
                </Form.Field>
                <div>
                    <input type="radio" checked={currentCar.color === 'Yellow'} id="Yellow" name="color" value="Yellow" onChange={handleInputChange} />
                    <label>Yellow</label><br />
                    <input type="radio" checked={currentCar.color === 'Green'} id="Green" name="color" value="Green" onChange={handleInputChange} />
                    <label>Green</label><br />
                    <input type="radio" checked={currentCar.color === 'Red'} id="Red" name="color" value="Red" onChange={handleInputChange} />
                    <label>Red</label><br /><br />
                </div>
                <Button type='submit' onClick={editAPIData}>Update</Button>
                <Link to='/'>
                    Cancel
                </Link>
            </Form>
        </div>
    )
}
