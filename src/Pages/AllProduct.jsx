import React, { useEffect, useState } from 'react';
import AllCard from './AllCard';

const AllProduct = () => {
    const [marts, setMarts] = useState([]);
    const [filteredMarts, setFilteredMarts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceRangeFilter, setPriceRangeFilter] = useState('');
    const [sortOption, setSortOption] = useState('');

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        fetch(`https://job-task-server-weld.vercel.app/marts`)
            .then(res => res.json())
            .then(data => {
                setMarts(data);
                setFilteredMarts(data); // Initial load
            });
    }, []);

    useEffect(() => {
        let filtered = marts;

        // Search filter
        if (searchQuery) {
            filtered = filtered.filter(mart =>
                mart.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Category filter
        if (categoryFilter) {
            filtered = filtered.filter(mart => mart.category === categoryFilter);
        }

        // Price range filter
        if (priceRangeFilter) {
            filtered = filtered.filter(mart => {
                const [min, max] = priceRangeFilter.split('-').map(Number);
                return mart.price >= min && mart.price <= max;
            });
        }

        // Sorting
        if (sortOption === 'price-asc') {
            filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-desc') {
            filtered = filtered.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'date-desc') {
            filtered = filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        }

        setFilteredMarts(filtered);
    }, [searchQuery, categoryFilter, priceRangeFilter, sortOption, marts]);

    // Pagination logic
    const totalPages = Math.ceil(filteredMarts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedMarts = filteredMarts.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mx-auto p-4">
            <div className='text-center mt-20 text-3xl font-extrabold text-red-800'>All Products</div>
            <hr className="border-t-4 border-red-800 w-64 mx-auto mb-4" />

            {/* Filters */}
            <div className="filter-section mb-6 p-4 flex flex-col md:flex-row items-center justify-between">
                {/* Search Input */}
                <div className="relative w-full md:max-w-xs mb-4 md:mb-0">
                    <input
                        type="text"
                        placeholder="Search by product name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border p-2 rounded-l-md w-full h-12"
                    />
                    <button className="absolute inset-y-0 right-0 px-4 py-2 bg-red-500 text-white rounded-r-md h-12">
                        Search
                    </button>
                </div>

                {/* Category Filter */}
                <select
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full md:w-auto mb-4 md:mb-0 md:ml-4 p-2 border rounded"
                >
                    <option value="">All Categories</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                    <option value="women's clothing">women's clothing</option>
                </select>

                {/* Price Range Filter */}
                <select
                    onChange={(e) => setPriceRangeFilter(e.target.value)}
                    className="w-full md:w-auto mb-4 md:mb-0 md:ml-4 p-2 border rounded"
                >
                    <option value="">All Price Ranges</option>
                    <option value="0-50">$0 - $50</option>
                    <option value="51-100">$51 - $100</option>
                    <option value="101-500">$101 - $500</option>
                </select>

                {/* Sorting */}
                <select
                    onChange={(e) => setSortOption(e.target.value)}
                    className="w-full md:w-auto md:ml-4 p-2 border rounded"
                >
                    <option value="">Sort By</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="date-desc">Date Added: Newest First</option>
                </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedMarts.map(mart => (
                    <AllCard key={mart._id} mart={mart} />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="pagination mt-10 flex justify-center">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-red-500 text-white' : 'bg-gray-300'} rounded-md`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AllProduct;
