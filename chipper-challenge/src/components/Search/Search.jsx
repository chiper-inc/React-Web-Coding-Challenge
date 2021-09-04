import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchBikes, getBikes } from '../../redux/actions';
import calendar from '../../assests/calendar.svg';
import { Input } from './styled';

const Search = () => {
    const [inputs, setInputs] = useState({
        description: '',
        from: '',
        to: '',
    });
    const dispatch = useDispatch();

    const handdleClick = (e) => {
        e.preventDefault();
        console.log('INPUTS: ', inputs);
        setInputs({
            description: inputs.description,
            from: inputs.from,
            to: inputs.to,
        });
        dispatch(searchBikes(inputs));
    };

    useEffect(() => {
        dispatch(searchBikes(inputs));
    }, [inputs.description]);

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
                    <Input
                        type='text'
                        placeholder='Search case description...'
                        onChange={(e) =>
                            setInputs({
                                ...inputs,
                                description: e.target.value,
                            })
                        }
                    />
                </div>
                <div className='form-from'>
                    <Input
                        type='number'
                        onChange={(e) =>
                            setInputs({ ...inputs, from: e.target.value })
                        }
                        placeholder='from'
                    />
                    <img src={calendar} alt='calendar' />
                </div>
                <div className='form-to'>
                    <Input
                        type='number'
                        onChange={(e) =>
                            setInputs({ ...inputs, to: e.target.value })
                        }
                        placeholder='to'
                    />
                    <img src={calendar} alt='calendar' />
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
