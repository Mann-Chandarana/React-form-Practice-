import { useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState({
        id: '',
        name: '',
        email: '',
        facilities: '',
        rating: 1,
        review: '',
    });

    const handleIdChange = ({ target }) => {
        setData({ ...data, id: target.value });
    };

    const handleNameChange = ({ target }) => {
        setData({ ...data, name: target.value });
    };

    const handleEmailChange = ({ target }) => {
        setData({ ...data, email: target.value });
    };

    const handleFacilitiesChange = ({ target }) => {
        setData({ ...data, facilities: target.value });
    };

    const handleRatingsChange = ({ target }) => {
        if (target.value >= 1 && target.value <= 5) {
            setData({ ...data, rating: target.value });
        }
    };

    const handleReviewChange = ({ target }) => {
        setData({ ...data, review: target.value });
    };

    const isValid = () => {
        if (data.id === '') {
            return 'ID field is empty!';
        }
        if (data.name === '') {
            return 'Name field is empty!';
        }
        if (data.email === '') {
            return 'Email field is empty!';
        }

        if (data.facilities === '') {
            return 'Facilites field is not selected!';
        }
        if (data.review === '') {
            return 'Review filed is empty!';
        }

        if (data.id.length > 20) {
            return 'ID length must be less than 20 characters!';
        }

        if (data.id.length < 3) {
            return 'ID should be atleast 3 characters long!';
        }

        if (data.name.length > 20) {
            return 'Name should less than 20 characters!';
        }

        if (data.review.length > 150) {
            return 'Review should be less than 150 characters!';
        }

        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const res = isValid();
        if (res === true) {
            alert('Form submitted!');
        } else {
            alert(res);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Feedback Form</h1>
                <label htmlFor="id">ID: </label>
                <input
                    id="id"
                    type="text"
                    onChange={handleIdChange}
                    value={data.id}
                />
                <br />

                <label htmlFor="name">Name: </label>
                <input
                    id="name"
                    type="text"
                    onChange={handleNameChange}
                    value={data.name}
                />
                <br />

                <label htmlFor="email">Email: </label>
                <input
                    id="email"
                    type="email"
                    onChange={handleEmailChange}
                    value={data.email}
                />
                <br />

                <label htmlFor="facilities">Facilites: </label>
                <select
                    id="facilities"
                    onChange={handleFacilitiesChange}
                    value={data.facilities}
                    disabled={data.id === '' || data.name === ''}
                >
                    <option>classrooms</option>
                    <option>labs</option>
                    <option>hostels</option>
                    <option>sports ground</option>
                </select>
                <br />

                <label htmlFor="rating">Rating: </label>
                <input
                    id="rating"
                    type="number"
                    onChange={handleRatingsChange}
                    value={data.rating}
                />
                <br />

                <label htmlFor="review" style={{ verticalAlign: 'top' }}>
                    Review:{' '}
                </label>
                <textarea
                    cols="40"
                    rows="5"
                    onChange={handleReviewChange}
                    value={data.review}
                ></textarea>
                <br />

                <button type="submit" disabled={isValid() !== true}>
                    Submit
                </button>
            </form>
            <footer>By: 20CS011 - Mann Chandarana</footer>
        </>
    );
}

export default App;
