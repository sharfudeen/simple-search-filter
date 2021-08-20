import React from 'react';
import { CarBrands } from '../data/carBrands';
import { CarColors } from '../data/carColors';

const SearchFilter = () => {
    return (
        <>
        <div className="w-1/4 border rounded-md mt-3">
            <div className="bg-gray-300 p-3">
                <p className="text-xl font-semibold">Brands</p>
            </div>
            <div className="w-full p-3">
                <form>
                    {
                        CarBrands.map((brand, index) => {
                            return (
                                <React.Fragment key={index}>
                                <label className="flex flex-row items-center cursor-pointer">
                                    <input type="checkbox" id={brand} className="checked:bg-blue-600 checked:border-transparent" />
                                    <span className="ml-2">{brand}</span>
                                </label>
                                </React.Fragment>
                            )
                        })
                    }
                </form>
            </div>
            <div className="bg-gray-300 p-3">
                <p className="text-xl font-semibold">Colors</p>
            </div>
            <div className="w-full p-3">
                <form>
                    {
                        CarColors.map((color, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <label className="flex flex-row flex-wrap items-center cursor-pointer">
                                        <input type="radio" id={index} className="checked:bg-blue-600 checked:border-transparent" />
                                        <span className="ml-2">{color}</span>
                                    </label>
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