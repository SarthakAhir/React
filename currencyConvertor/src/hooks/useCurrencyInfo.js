import {useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] =useState({});
    useEffect(()=> {
        fetch(`https://v6.exchangerate-api.com/v6/
            2805b6037a46e153058c031a/latest/${currency}`)
            
            .then(res => res.json())
            .then((res) =>setData(res[currency]));
            console.log(data);
    } , [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;