import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchBikes, getBikes } from '../../redux/actions';
// import calendar from '../../assests/calendar.svg';

const Search = () => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        description: '',
        from: '',
        to: '',
    });

    const handdleClick = (e) => {
        e.preventDefault();
        setInputs({
            description: inputs.description,
            from: inputs.from,
            to: inputs.to,
        });
        dispatch(searchBikes(inputs));
    };

    useEffect(() => {
        if (inputs.description === '') {
            dispatch(getBikes());
        }
        dispatch(searchBikes(inputs));
    }, [inputs.description, dispatch]);

    const resetClick = () => {
        setInputs({
            description: '',
            from: '',
            to: '',
        });
        dispatch(getBikes());
    };

    return (
        <>
            <form className='form-search' onSubmit={(e) => handdleClick(e)}>
                <div className='form-description'>
                    <input
                        type='text'
                        placeholder='Search case description...'
                        onChange={(e) =>
                            setInputs({
                                description: e.target.value,
                            })
                        }
                        value={inputs.description}
                    />
                </div>
                <div className='form-from'>
                    <input
                        type='number'
                        onChange={(e) =>
                            setInputs({ ...inputs, from: e.target.value })
                        }
                        placeholder='From year'
                        value={inputs.from}
                    />
                    {/* <img src={calendar} alt='calendar' className='calendar' /> */}
                </div>
                <div className='form-to'>
                    <input
                        type='number'
                        onChange={(e) =>
                            setInputs({ ...inputs, to: e.target.value })
                        }
                        placeholder='To year'
                        value={inputs.to}
                    />
                    {/* <img src={calendar} alt='calendar' /> */}
                </div>
                <button className='btn-form' type='submit'>
                    Find cases
                </button>
            </form>
            <button className='btn-reset' onClick={() => resetClick()}>
                Reset
            </button>
        </>
    );
};

export default Search;
