import React, { useState } from 'react';

const Navbar = () => {
  const categories = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Technology' },
    { id: 2, name: 'Science' },
    { id: 3, name: 'Art' },
    { id: 4, name: 'Sports' },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <nav className="flex items-center justify-start bg-gray-100 p-4 w-full">
      <ul className="flex space-x-4">
        {categories.map((category) => (
          <li key={category.id}>
            <a
              href="#"
              className={`text-gray-800 font-medium hover:text-gray-600 transition duration-300 ${
                activeCategory === category.id
                  ? 'border-b-2 border-orange-400'
                  : ''
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
