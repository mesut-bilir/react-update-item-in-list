const initialState = {
    posts: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                posts: action.payload,
            };
        case 'EDIT_DATA':
            const updatedData = [];
            const data = action.payload;
            state.posts.map((car) => {
                if (car.id === data.id) {
                    car.isStock = data.isStock;
                    car.hp = data.hp;
                    car.price = data.price;
                    car.color = data.color;
                }
                updatedData.push(car);
            });
            return {
                ...state,
                posts: updatedData,
            };

        default:
            return state;
    }
};