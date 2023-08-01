import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { parseCookies } from 'nookies';
import GeneralLoader from '@/utils/GeneralLoader';
import axios from 'axios';
import baseUrl from '@/utils/baseUrl';
import toast from 'react-hot-toast';
import PurchaseRaw from '@/components/Admin/PurchaseRaw';
import Pagination from '@/components/_App/Pagination';
import {Parser} from "json2csv";

const SearchUser = () => {
    const [search, setSearch] = useState('');
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);

    const { elarniv_users_token } = parseCookies();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const pageSize = 5;

    const defaultFilter = 'name';
    const [filter, setFilter] = useState(defaultFilter);
    const [filterOptions, setFilterOptions] = useState({});

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const payload = {
                headers: { Authorization: elarniv_users_token },
            };

            const response = await axios.get(
                `${baseUrl}/api/purchases/get-all-purchases?page=${currentPage}&pageSize=${pageSize}&search=${search}`,
                payload
            );
            setUsers(response.data.purchases);

            setTotalItems(response.data.totalCount);

            setLoading(false);

            const optionsMap = {};
            response.data.purchases.forEach((user) => {
                if (user.items.length > 0) {
                    optionsMap[user.items[0].name] = `users[0].items[0].name`;
                }
            });
            setFilterOptions(optionsMap);
        } catch (err) {
            let {
                response: {
                    data: { message },
                },
            } = err;
            toast.error(message, {
                style: {
                    border: '1px solid #ff0033',
                    padding: '16px',
                    color: '#ff0033',
                },
                iconTheme: {
                    primary: '#ff0033',
                    secondary: '#FFFAEE',
                },
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const filteredUsers = users.filter((user) => {
        if (filter === 'name') {
            return user.items.length > 0 && user.items[0].name;
        }
        return true;
    });

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const payload = {
                headers: { Authorization: elarniv_users_token },
            };

            const response = await axios.get(
                `${baseUrl}/api/purchases/get-all-purchases?page=${1}&search=${search}&pageSize=${pageSize}`,
                payload
            );

            setUsers(response.data.purchases);
            setTotalItems(response.data.totalCount);
            setCurrentPage(1);

            setLoading(false);
        } catch (err) {
            setUsers([]);

            let {
                response: {
                    data: { message },
                },
            } = err;
            toast.error(message, {
                style: {
                    border: '1px solid #ff0033',
                    padding: '16px',
                    color: '#ff0033',
                },
                iconTheme: {
                    primary: '#ff0033',
                    secondary: '#FFFAEE',
                },
            });
            setLoading(false);
        }
    };

    function handleCsvDownload() {

        if (users.length < 1){
            return alert("No se han encontrado tickets!")
        }

        const json2csvParser = new Parser();
        const csvData = json2csvParser.parse(users);

        // console.log(csvData)
        const csvBlob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const csvUrl = URL.createObjectURL(csvBlob);
        const hiddenElement = document.createElement('a');

        hiddenElement.href = csvUrl;
        hiddenElement.target = '_blank';
        hiddenElement.download = 'users.csv';
        hiddenElement.click();
    }

    return (
        <>
            {isMounted && (
                <div>
                    <form className='search-box' onSubmit={handleSearch}>
                        <input
                            type='text'
                            className='input-search'
                            placeholder={t('search-user-sub', {
                                defaultValue: 'Search Sub',
                            })}
                            name='search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{
                                border: '2px solid #ccc',
                                borderRadius: '5px',
                                padding: '10px 20px',
                                fontSize: '16px',
                                width: '30%',
                                boxSizing: 'border-box',
                            }}
                        />

                        <select
                            value={filter}
                            onChange={handleFilterChange}
                            style={{
                                border: '2px solid #ccc',
                                borderRadius: '5px',
                                padding: '10px 20px',
                                fontSize: '16px',
                                width: '30%',
                                boxSizing: 'border-box',
                                marginTop: '10px',
                                position: 'relative',
                                left: '10px',
                            }}
                        >
                            {Object.keys(filterOptions).map((optionKey) => (
                                <option
                                    key={filterOptions[optionKey]}
                                    value={optionKey}
                                >
                                    {optionKey}
                                </option>
                            ))}
                        </select>

                        <button
                            type='submit'
                            style={{
                                backgroundColor: '#CE4F88',
                                border: 'none',
                                color: 'white',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                marginLeft: '10px',
                                cursor: 'pointer',
                                position: 'relative',
                                left: '10px',
                            }}
                        >
                            <i className='flaticon-search'></i>
                        </button>
                    </form>
                    <hr className='payment-field-border' />
                    {loading ? (
                        <GeneralLoader />
                    ) : (
                        <div className='table-responsive'>
                            <table className='table align-middle table-hover fs-14'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Phone</th>
                                        <th scope='col'>Subscribed</th>
                                        <th scope='col'>Items</th>
                                        <th scope='col'>Status</th>
                                        <th scope='col'>Alta</th>
                                        <th scope='col'>Fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.length > 0 ? ( // Use filteredUsers here
                                        filteredUsers.map((user) => (
                                            <PurchaseRaw
                                                key={user.id}
                                                {...user}
                                            />
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan='7'
                                                className='text-center py-3'
                                            >
                                                Empty!
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <button
                            onClick={handleCsvDownload}
                            >
                                Descargar como CSV
                            </button>
                            <Pagination
                                totalItems={totalItems}
                                pageSize={pageSize}
                                onPageChange={handlePageChange}
                                fetchData={fetchData}
                            />
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default SearchUser;
