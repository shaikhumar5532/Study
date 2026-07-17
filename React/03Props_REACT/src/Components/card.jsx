import React from 'react'

function Card(){
    return (
        <div className="profile-card relative h-[400px] w-[300px] rounded-md">
            <img
                src="https://images.unsplash.com/photo-1773332611573-5e5bfa8e5de5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
                alt="AirMax Pro"
                className="h-full w-full rounded-md object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4">
                <h1 className="text-lg font-semibold text-white">Delba</h1>

                <p className="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, debitis?
                </p>

                <button className="view-button mt-3 inline-flex cursor-pointer items-center justify-center text-sm font-semibold text-white">
                    View Profile →
                </button>
            </div>
        </div>
    )
}

export default Card