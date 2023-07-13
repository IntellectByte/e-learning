import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { parseCookies } from 'nookies';
import GeneralLoader from '@/utils/GeneralLoader';
import ManageRaw from '@/components/Admin/ManageRaw';
import axios from 'axios';
import baseUrl from '@/utils/baseUrl';
import toast from "react-hot-toast";
import PurchaseRaw from "@/components/Admin/PurchaseRaw";
import Pagination from "@/components/_App/Pagination";

const SearchUser = () => {
    const [search, setSearch] = useState('');
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);

    const { elarniv_users_token } = parseCookies();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)
    const [totalItems, setTotalItems] = useState(0)
    const [pageSize, setPageSize] = useState(2)

    const handlePageChange = (pageNumber) => {
        console.log(pageNumber)
        setPage(pageNumber);
    };

    const fetchData = async () => {
        setLoading(true);
        try {

            const payload = {
                headers: { Authorization: elarniv_users_token },
            };

            const response = await axios.get(`${baseUrl}/api/purchases/get-all-purchases?page=${page}&pageSize=${pageSize}&search=${search}`, payload);
            setUsers(response.data.purchases)
            console.log(response.data.purchases)

            setTotalItems(response.data.totalCount)
            setPageSize(response.data.pageSize)

            setLoading(false);
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
    }, [page]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();


        try {
            setLoading(true);

            const payload = {
                headers: { Authorization: elarniv_users_token },
            };

            const response = await axios.get(
                `${baseUrl}/api/purchases/get-all-purchases?page=${1}&search=${search}&pageSize=${pageSize}`, payload
            );

            setPage(response.data.page)

            setUsers(response.data.purchases);
            setTotalItems(response.data.totalCount)
            setPageSize(response.data.pageSize)
            console.log(response.data);

            setLoading(false);
        } catch (err) {

            setUsers([])

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
                                        {/* <th scope='col'>Text</th> */}
                                        {/*<th scope='col'>Action</th>*/}
                                        {/*<th scope='col'>Submit</th>*/}
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.length > 0 ? (
                                        users.map(
                                            (user) => (
                                                <PurchaseRaw
                                                    key={user.id}
                                                    {...user}
                                                />
                                            )
                                        )
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
