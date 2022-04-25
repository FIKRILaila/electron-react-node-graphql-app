import React from "react";



export const TextArea= ({ filialeDescription, setFilialeDescription }) => {


    return (
        <>
            <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-500 "
            >
                Your Description
            </label>
            <textarea
                id="description"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 outline-none bg-gray-50 rounded-lg border border-gray-300 mb-8 "
                placeholder="Leave a Description..."
                value={filialeDescription}
                onChange={(e) => setFilialeDescription(e.target.value)}
            />
        </>
    )
}


