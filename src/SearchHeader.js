import {useState} from 'react';

function SearchHeader({search}) {

    const [valueInput, setValueInput] = useState('')

    const handleForSubmit = (event) => {
        event.preventDefault();
        search(valueInput);
    };

    const handleChange = (event) =>{
        setValueInput(event.target.value);
    };

    return ( 
        <div className="searchDiv"> 
            <form onSubmit={handleForSubmit} > 
                <label>Ne Arıyorsunuz ? </label>
                <input value={valueInput} onChange={handleChange}/>
            </form>
        </div>   
     );
}

export default SearchHeader;