import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";

export const InputForm = () => {
    return (
      <div>
        <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="you name"
          />
        </div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="mt-1">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="you@example.com"
          />
        </div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
        imageUrl
        </label>
        <div className="mt-1">
          <input
            type="url"
            name="imageUrl"
            id="imageUrl"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="you image URL"
          />
        </div>
        <div>
        <button
          type="button"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={saveContact}
        >
          Save Contact
        </button>
      </div>
      </div>
    )
  }
  