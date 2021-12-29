import React, { useState } from 'react'
import PropTypes from 'prop-types';
const AddCategory = ({ setCategories }) => {

    const [inpuValue, setInpuValue] = useState('');

    const handleInputChange = (e) => {
        setInpuValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inpuValue.trim().length > 2) {
            setCategories(cats => [inpuValue, ...cats, ] );
            setInpuValue('')

        }

    }

    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Ingresa la categoria: </label>
                    <input type="text"
                        value={inpuValue}
                        onChange={handleInputChange}
                        className="form-control form-control-sm"
                    />

                     
                </div>
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
export default AddCategory
