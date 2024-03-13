import { Link } from '@inertiajs/react';
import React from 'react';

export default function Course({ id, code, name, description, term, year }) {
    return (
        <Link to={`/courses/${id}`}>
            <div className="max-w-md bg-gray-700 text-white rounded-xl overflow-hidden shadow-lg mx-2 my-4 ">
                <div className="px-6 py-4 hover:scale-105 hover:bg-gray-600">
                    <div className="font-bold text-xl mb-2">{code}</div>
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-base">{description}</p>
                    <p className="text-sm">{term}</p>
                    <p className="text-sm">{year}</p>
                </div>
            </div>
        </Link>
    );
};
