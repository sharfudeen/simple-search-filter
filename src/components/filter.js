import React from 'react';
import { CarBrands } from '../data/carBrands';
import { CarColors } from '../data/carColors';

const SearchFilter = (props) => {
    return (
        <>
        <div className="w-1/4 mt-3 border rounded-md">
            <div className="p-3 bg-gray-300">
                <p className="text-xl font-semibold">Brands</p>
            </div>
            <div className="w-full p-3">
                <form>
                    {
                        CarBrands.map((brand, index) => {
                            return (
                                <React.Fragment key={index}>
                                <label className="flex flex-row items-center cursor-pointer" >
                                    <input type="checkbox" id={index} className="checked:bg-blue-600 checked:border-transparent" />
                                    <span className="ml-2">{brand}</span>
                                </label>
                                </React.Fragment>
                            )
                        })
                    }
                </form>
            </div>
            <div className="p-3 bg-gray-300">
                <p className="text-xl font-semibold">Colors</p>
            </div>
            <div className="w-full p-3">
                <form>
                    {
                        CarColors.map((color, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div role="group">
                                        <label className="flex flex-row flex-wrap items-center cursor-pointer">
                                            <input type="radio" id={color} value={color} name="color" className="checked:bg-blue-600 checked:border-transparent" onClick={(e) => props.handleRadio(e.target.value)} />
                                            <span className="ml-2">{color}</span>
                                        </label>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </form>
            </div>
        </div>
        </>
    )
}

export default SearchFilter;