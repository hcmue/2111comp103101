import { useEffect, useState } from "react";

export const Comment = () => {
    // React Hooks: state ==> useState
    const [data, setData] = useState([]);
    const [firstLoad, setFirstLoad] = useState(true);

    // gọi API lấy comment lúc mới load trang
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setFirstLoad(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <h2>Đọc comments từ API</h2>
            {firstLoad ? 'Đang load dữ liệu' : (
                <div>
                    <h3>Danh sách Comment</h3>
                    {data.map((item) => (
                        <div>{item.name} - {item.email}</div>
                    ))}
                </div>
            )}
        </>
    );
};