import { useEffect, useState } from "react"
import cafeApi from '../api/cafeApi';
import { CagetoriesResponse, Categoria } from '../interfaces/appInterfaces';


export const useCategories = () => {
    
    const [ isLoading, setIsLoading ] = useState( true )
    const [ categories, setCategories ] = useState<Categoria[]>([]);
    
    useEffect(() => {
        getCategories();
    }, [])


    const getCategories = async() => {
        const resp = await cafeApi.get<CagetoriesResponse>('/categorias');
        setCategories( resp.data.categorias );
        setIsLoading(false);
    }


    return {
        isLoading,
        categories
    }
}
