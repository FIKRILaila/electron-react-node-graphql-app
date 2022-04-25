import React from "react";


export const Input= ({ setFilialeName, filialeName, label }) => {

    return (
        <div className="mb-6">
            <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-500 "
            >
                {label}
            </label>
            <input
                type="text"
                id="name"
                value={filialeName}
                onChange={(e) => setFilialeName(e.target.value)}
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                placeholder={label}
            />
        </div>

    )
}