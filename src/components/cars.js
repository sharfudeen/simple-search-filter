import React from 'react';

const Cars = (props) => {
    const {carsDetails} = props;
    return(
        <>
        <div className="w-3/4 p-3">
            <div className="w-full flex felx-row flex-wrap">
                {
                    carsDetails.map((car, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className="w-1/4 mr-5 mb-5 border-2 rounded-md">
                                    <img src={car.image} className="w-full" alt="" />
                                    <div className="w-full p-3">
                                        <p className="text-lg font-bold">{car.productName}</p>
                                        <div className="border-t flex flex-row flex-wrap justify-between items-center">
                                            <p className="text-gray-800">{car.brandName} - {car.carColor}</p>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Cars;