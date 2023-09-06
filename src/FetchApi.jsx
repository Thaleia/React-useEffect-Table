import { useEffect, useState } from "react";

const array = [
    { key: '1', type: 'component', value: 'react-useeffect-counter' },
    { key: '2', type: 'project', value: 'colorize' },
    { key: '3', type: 'component', value: 'react-hidden-text-with-useState' },
    { key: '4', type: 'project', value: 'counter' },
    { key: '5', type: 'project', value: 'react-todolist' },
    { key: '6', type: 'project', value: 'react-useeffect-positive-affirmations' },
    { key: '7', type: 'project', value: 'react-useeffect-rendering' },
    { key: '8', type: 'project', value: 'children-charities' },
];

const UseCaseLiveFilter = props => {
    const [inputValue, setInputValue] = useState('');
    const [inputType, setInputType] = useState('');
    const [filteredArray, setFilteredArray] = useState(array);

    const inputValueHandler = e => {
        setInputValue(e.target.value);
    };

    const inputTypeHandler = e => {
        setInputType(e.target.value);
    };

    useEffect(() => {
        setFilteredArray((_) => {
            const newArray = array.filter(item => 
                item.value.toLowerCase().includes(inputValue.toLowerCase()) &&
                item.type.toLowerCase().includes(inputType.toLowerCase())
            );
            return newArray;
        });
    }, [inputValue, inputType]);

    const listItems = filteredArray.map((item) =>
        <tr key={item.key}>
            <td>{item.type}</td>
            <td> {item.value}</td>
        </tr>
    );

    return (
        <>
            <hr />
            <h2>useEffect use case</h2>
            <h3>Running on state change: live filtering</h3>
            <form>
                <div>
                    <label htmlFor="input-type">Filter by <b>type</b></label><br />
                    <input type="text" id="input-type" autoComplete="off" onChange={inputTypeHandler} style={{ height: '1.5rem', width: '10rem', marginTop: '1rem' }} />
                </div>
                <div>
                    <label htmlFor="input-value">Filter by <b>value</b></label><br />
                    <input type="text" id="input-value" autoComplete="off" onChange={inputValueHandler} style={{ height: '1.5rem', width: '10rem', marginTop: '1rem' }} />
                </div>
            </form>
            <br />
            <table>
                <tr>
                    <th>Type</th>
                    <th>Value</th>
                </tr>
                {listItems}
            </table>
        </>
    );
};

export default UseCaseLiveFilter;